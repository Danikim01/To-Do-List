import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import taskRouter from './routes/taskRouter.js';
import * as dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGOURI;

const connection = async () => {
    try{
        await mongoose.connect(uri)
        console.log("Conexion exitosa a la base de datos")
    }catch(error){
        console.log("Error al conectar a la base de datos: ", error);
    }
}

connection();

const corsOptions = {
    origin: ["http://localhost:5173"],
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', taskRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});