import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/index.js';

const app = express()


app.use(express.json());

connectDB()

app.get('/', (req, res) => {
  res.send(' Server is Running!');
});

// start server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running`);
});