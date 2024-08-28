import {Router} from 'express';
import taskController from '../controllers/taskController.js';

const taskRouter = Router();

taskRouter.get('/', taskController.getTasks);
taskRouter.post('/',taskController.createTask)
taskRouter.put('/:id',taskController.updateTask)
taskRouter.delete('/:id',taskController.deleteTask)

export default taskRouter;