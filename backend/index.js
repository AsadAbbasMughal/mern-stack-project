import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(express.json());


app.get('/', (req, res) => {
  res.send(' Server is Running!');
});

// start server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running`);
});