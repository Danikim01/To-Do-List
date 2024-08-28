import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false,
        required: true
    },
    created_at: { 
        type: Date, 
        default: Date.now 
    }
});

const tasks = mongoose.model("tasks", taskSchema);

export default tasks;
