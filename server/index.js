import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import mailRouter from './src/routes/mailRoute.js';
import schedulerRouter from './src/routes/scheduledMailRouter.js';

const app = express();
env.config();

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/mail', mailRouter);
app.use('/api/scheduleMail', schedulerRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
