const express = require("express"); 
const app = express();
const port = 3001; 
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/routes");
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", router);

app.listen(port, () => {console.log(`Server is running at port ${port}...`)})

// const { spawn } = require('child_process');

// const child = spawn("cmd", ['/c', 'daemon_start']);

// child.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });

// child.stderr.on('data', (data) => {
//     console.log(`stderr: ${data}`);
// });

// child.on('error', (error) => console.log(`error: ${error.message}`));

// child.on('exit', (code, signal) => {
//     if (code) console.log(`Process exit with code: ${code}`);
//     if (signal) console.log(`Process killed with signal: ${signal}`);
//     console.log(`Done!`)
// });