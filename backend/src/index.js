import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './lib/db.js';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';


dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
    console.log('Server is running on PORT:' + PORT);
    connectDB();
});



// mongodb = p4NrgOjE6HgzMSZT
//  mongodb+srv://arcederickdev:p4NrgOjE6HgzMSZT@cluster0.9qa0n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0