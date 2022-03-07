const express = require("express"); 
const app = express();
const port = 3001; 
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./mysqlcon"); 
const multer = require("multer");
const path = require('path');
const http = require("http").createServer(app);
var io = require('socket.io')(http, {cors : {origin: "*"}});

const corsOptions = {
    origin: true,
    methods: ["GET", "POST", "PUT"],
    credentials: true,
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./");},
        filename: function (req, file, cb) {
            const ext = file.mimetype.split("/")[1];
            cb(null, `uploads/${file.originalname}-${Date.now()}.${ext}`);
        }
});

const upload = multer({
    storage: storage
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.get('/', (req, res) =>{
    res.send('test...')
})

app.use('/', express.static(path.join(__dirname, '/')));

app.get("/mypage", (req, res) => {
    pool.getConnection((err, connection) => {
    connection.query("SELECT * FROM kuoinfo", 
        function(err, rows) {
            if(err) {
                throw err;
            }else {
                console.log(rows)
                res.send(rows)
                connection.release();
            }
        })
    })
});

app.put("/mypage", (req, res) => {
    console.log('hi')
    console.log(req.body);
    pool.getConnection((err, connection) => {
        connection.query(`UPDATE kuoinfo SET kuoname = '${req.body.name}',  kuopwd = '${req.body.psw}', kuoadr
         = '${req.body.adr}' WHERE id = '${req.body.id}'`, (err, result) => {
            if (err) {
                throw err;
            }
            else {
                console.log('성공!')
                res.send('true')
                connection.release();
            }
        })
    })
})

app.listen(port, () => {console.log('server running')})