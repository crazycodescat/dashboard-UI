import { Router } from 'express';

// MODULES
import { sells } from '../controller/sellsController.js';

const sellsRouter = Router();

sellsRouter.get('/sellsData', sells);

export default sellsRouter;
