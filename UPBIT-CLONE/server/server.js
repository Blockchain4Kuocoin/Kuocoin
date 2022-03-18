const express = require("express"); 
const app = express(); 
const port = 3001; 
const cors = require("cors"); 
const bodyParser = require("body-parser"); 
const router = require("./routes/routes"); 
const path = require('path'); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); app.use(cors()); app.use("/", router); 
app.listen(port, () => {console.log(`Server is running at port ${port}...`)})



