import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './router/userRouter.js'; 

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

app.use('/', userRouter);

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
