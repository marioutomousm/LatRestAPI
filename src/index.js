
const express = require("express");
const router = require("./routes/cars");
const middlewareLogRequest = require('./middleware/logs.js')
const app =  express();


app.listen(4000, ()=>{
  console.log('Server sudah berjalan di PORT 4000')
}); 

app.use(middlewareLogRequest);
app.use(express.json());


app.use('/cars', router); 


