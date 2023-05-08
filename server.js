import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import connection from './database/db.js';
import userRouter from './routes/user-route.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({extented:true}));
app.use(bodyParser.urlencoded({extented:true}));
app.use('/api',userRouter);

const PORT = process.env.PORT || 8090;

const URL = process.env.DATABASE_URI;

connection(URL);

app.listen(PORT, () => {
    console.log(`server is running at ${PORT} port `);
});