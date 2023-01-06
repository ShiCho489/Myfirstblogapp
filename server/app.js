import express from 'express'; 
import mongoose from 'mongoose';


const app = express();

app.use ("/", (req, res, next)=> {
    res.send("Hello");
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)