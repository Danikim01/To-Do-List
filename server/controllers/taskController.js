import taskModel from '../models/taskModel.js';

const createTask = async (req, res) => {
    const {title,done} = req.body
    try{
        const task = await taskModel.create({title,done})
        res.status(200).send({status: "success", payload: task})
    }catch(error){
        res.status(500).send({message: "Internal server error"})
    }
}

const getTasks = async (req, res) => {
    try{
        const tasks = await taskModel.find()
        res.status(200).send({status: "success", payload: tasks})
    }catch(error){
        res.status(500).send({message: "Internal server error"})
    }
}

const updateTask = async (req, res) => {
    const {id} = req.params
    const {done} = req.body
    try{
        const task = await taskModel.findOne({_id: id})
        task.done = done
        await task.save()
        return res.status(200).send({ _id: id, done: task.done, title: task.title }); 
    }catch(error){
        res.status(500).send({message: "Internal server error"})
    }    

}

const deleteTask = async (req, res) => {
    const {id} = req.params
    try{
        await taskModel.deleteOne({_id: id})
        return res.status(200).send({message: "Task deleted"})
    }catch(error){
        res.status(500).send({message: "Internal server error"})
    }
}

export default {
    createTask,
    getTasks,
    updateTask,
    deleteTask
}