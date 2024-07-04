import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import router from './src/routes/mailRoute.js';

const app = express();
env.config();

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/mail', router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
