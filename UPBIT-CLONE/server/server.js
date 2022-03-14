const express = require("express"); 
const app = express();
const port = 3001; 
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/routes");
const path = require('path');
const http = require("http").createServer(app);
const mysql = require("mysql");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', express.static(path.join(__dirname, '/')));

var io = require('socket.io')(http, {cors : {origin: "*"}});

// const db = mysql.createConnection({
//     user:""
// })

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

app.get("/login", (req, res) => {
    console.log("connection success!");
    console.log("req query: ");
    console.log(req.query)
    const id = req.query.id;
    const pw = req.query.pw;
    pool.getConnection((err, connection) => {
        if (err) throw err;

        try {
            const sql = "SELECT * FROM userinfo where id = ? and pw = ?";
            connection.query(sql, [id, pw], (err, result) => {
                if (err) throw err;
                console.log(result);
                if (result.length === 1) res.send({messages: "success"});
                else res.send({messeges: "no data"});
            });
            connection.release();
        }
        catch(err) {
            console.log("error");
            res.send({messages: "fail"});
            connection.release();
        }
    })
})

app.post("/signup",( req , res ) => {
    console.log("req body: ");
    console.log(req.body);

    const id = req.body.id;
    const pw = req.body.pw;
    const name = req.body.name;

    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("connection success!");
        
        try {
            const sql = `INSERT INTO userinfo (id, pw, name) VALUES ("${id}", "${pw}", "${name}")`;
            connection.query(sql, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.send({message: "success"})
            });
            connection.release();
        }
        catch(err) {
            console.log("error");
            res.send({message: "fail"});
            connection.release();
        }
    })
}) 


// app.get("/login", (req,res)=>{
//     pool.getConnection((err, connection) => {
//         console.log("연결 성공!");
//         connection.query(`SELECT * FROM userinfo`, (err, result) => {
//             if(err){
//                 throw err;
//             }
//         });
//     })
// });

// app.post("/signup", (req,res)=>{
//     const userid = req.body.pid;
//     const userpw = req.body.ppw;
//     const username = req.body.pname;
//     console.log(req.body);
//     pool.getConnection((err, connection) => {
//         console.log("연결 성공!")
//         connection.query(`SELECT * FROM userinfo WHERE userid="${userid}"`, (err, result0) => {
//             if (err) throw err;
//             else if (result0.length!=0) {
//                 connection.release();
//                 res.send(false);
//             }
//             else {
//                 connection.query(`INSERT INTO userinfo (userid, userpw, username)
//                 VALUES ("${userid}", "${userpw}", "${username}")`,
//                 (err, result) => {
//                     if(err){
//                         throw err;
//                     } else {
//                         console.log("회원가입 성공!");
//                         connection.release();
//                         res.send(true);
//                     }     
//                 });
//             }
//         })
//     })
// });

app.listen(port, () => {console.log('server running')})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", router);

app.listen(port, () => {console.log(`Server is running at port ${port}...`)})
