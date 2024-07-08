import { Router } from 'express';

// MODULES
import { mailScheduler } from '../controller/schedulerController.js';

const schedulerRouter = Router();

schedulerRouter.post('/reportMailScheduler', mailScheduler);

export default schedulerRouter;
