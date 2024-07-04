import { Router } from 'express';

// MODULES
import { mailer } from '../controller/mailerController.js';

const router = Router();

router.post('/reports', mailer);

export default router;
