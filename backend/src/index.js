import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from './lib/db.js';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import {app, server } from './lib/socket.js';



dotenv.config();



// Increase payload size limit
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
    console.log('Server is running on PORT:' + PORT);
    connectDB();
});



// mongodb = p4NrgOjE6HgzMSZT
//  mongodb+srv://arcederickdev:p4NrgOjE6HgzMSZT@cluster0.9qa0n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0