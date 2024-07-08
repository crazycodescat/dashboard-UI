import { Router } from 'express';

// MODULES
import { mailer } from '../controller/mailerController.js';

const mailRouter = Router();

mailRouter.post('/reports', mailer);

export default mailRouter;
