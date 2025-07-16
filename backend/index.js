import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/index.js';
import authRouter from './routes/auth.routes.js'
import todoRouter from './routes/todo.routes.js'
import cors from 'cors'


dotenv.config(); 

const app = express()


app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // Your React frontend URL
  credentials: true // ✅ Allow cookies
}));

connectDB()

app.use('/auth', authRouter) 
app.use('/todo', todoRouter)

// start server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running`);
});