# To-Do List Application

This project is a full-stack web application for managing a to-do list. It features a frontend built with React.js and a backend powered by Node.js and Express.js. Users can add, update, and delete tasks, with real-time updates reflecting changes in the user interface.

## Technologies Used

- **Frontend**:
  - [React.js](https://reactjs.org/): A JavaScript library for building user interfaces.
  - [Axios](https://axios-http.com/): A promise-based HTTP client for making API requests.

- **Backend**:
  - [Node.js](https://nodejs.org/): A JavaScript runtime built on Chrome's V8 JavaScript engine.
  - [Express.js](https://expressjs.com/): A web application framework for Node.js.
  - [MongoDB](https://www.mongodb.com/): A NoSQL database used for storing to-do items (implied).

## Features

- **Add Tasks**: Create new tasks to manage.
- **Update Tasks**: Mark tasks as completed or incomplete.
- **Delete Tasks**: Remove tasks from the list.
- **Real-Time Updates**: Reflects changes immediately without refreshing the page.
- **Error Handling**: Proper error management for API requests and server interactions.

## Setup and Running

**Clone the repository:**

```bash
git clone git@github.com:Danikim01/To-Do-List.git
```

Setup the client and run:

```bash
cd client
npm install
npm run dev
```

Do the same for the server:

```bash
cd server
npm install
npm run dev
```