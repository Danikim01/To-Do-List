import "../styles.css"
import { useEffect, useState } from "react"
import axios from "axios"

const ToDoList = () => {
    const [newItem, setNewItem] = useState("") 
    const [todos, setTodos] = useState([])
  
    useEffect(() => {
      const fetchAPI = async () => {
        const response = await axios.get("http://localhost:8080/api")
        setTodos(response.data.payload.map(todo => ({
          id: todo._id,
          completed: todo.done,
          title: todo.title
        })))
      }
      fetchAPI()
    }, [])
    

    async function handleSubmit(event) {
      try {
        event.preventDefault();
        const data = {
          title: newItem,
          done: false
        };
    
        const result = await axios.post("http://localhost:8080/api", data, {
          headers: {
            "Content-Type": "application/json"
          }
        });
    
        setTodos((currentTodos) => [
          ...currentTodos,
          {
            id: result.data.payload._id,
            completed: result.data.payload.done,
            title: result.data.payload.title
          }
        ]);
    
        setNewItem("");
      } catch (error) {
        console.error("Error details:", error.response || error.message || error);
        alert("Error al crear la tarea");
      }
    }
    
    
  
    async function toggleTodo(id, checked) {
      try {
        const response = await axios.put(`http://localhost:8080/api/${id}`, { done: checked });
        const updatedTodo = response.data; // Obtener la tarea actualizada desde la respuesta
        setTodos((currentTodos) => {
          return currentTodos.map(todo => {
            if (todo.id === id) {
              return { ...todo, completed: updatedTodo.done }; // Usar el valor actualizado del backend
            }
            return todo;
          });
        });
      } catch (error) {
        console.error("Error updating todo:", error.response || error.message || error);
        alert("Error al actualizar la tarea");
      }
    }
    
    async function handleDelete(id){
      // setTodos((currentTodos) => {
      //   return currentTodos.filter(todo => todo.id !== id)
      // })
      try {
        const response = await axios.delete(`http://localhost:8080/api/${id}`);
        setTodos((currentTodos) => {
          return currentTodos.filter(todo => todo.id !== id);
        });
      } catch (error) {
        console.error("Error deleting todo:", error.response || error.message || error);
        alert("Error al eliminar la tarea");
      }
    }

    return (
        <>
            <h1>To Do List</h1>
            
            <form onSubmit={handleSubmit} className="new-action-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input type="text" id="item" value={newItem} onChange={e => setNewItem(e.target.value)}/>
                <button className="btn"  >Add</button>
            </div>
            </form>
            <h2>List:</h2>
            <ul>
                {todos.map(todo => {
                return <li key={todo.id}>
                  <label>
                      <input  type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id,e.target.checked)}/>
                      {todo.title}
                  </label>
                              
                  <button className="delete-btn" onClick={() => handleDelete(todo.id)}>Delete</button>
                </li>
                })}
            </ul>
        </>  
      )
}

export default ToDoList