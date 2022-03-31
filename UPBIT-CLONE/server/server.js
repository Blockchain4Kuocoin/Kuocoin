const express = require("express"); 
const app = express(); 
const port = 3001; 
const cors = require("cors"); 
const bodyParser = require("body-parser"); 
const router = require("./routes/routes"); 
const path = require('path'); 
const corsOptions = {
    origin: "*",
    credentials: "true"
}

const request = require("request");
const con = require("./utils/mysqlcon");
const dbconfig = require("./utils/mydbsql.json");

const srequset = require("sync-request");

const mysql = require("sync-mysql");

var connection = new mysql({
    host: dbconfig.host,
    user: dbconfig.user,
    password: dbconfig.password,
    database: dbconfig.database
})

const dotenv = require('dotenv');
dotenv.config();

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;
const PORT = 9554;
const ACCOUNT = "sky";
const ID_STRING = "kuoscoin_id";
const headers = {
    "content-type" : "text/plain;"
};

// setInterval(() => {
//     console.log('hi');

//     const height = `SELECT height from kuosblockdata`;
    
//     const test = connection.query(height).length;

//     console.log(test);

    // var hdataString = `{
    //     "jsonrpc":"1.0", 
    //     "id":"${ID_STRING}", 
    //     "method":"getblockcount",
    //     "params":[]
    //     }`;
    // var hoptions = {
    // headers: headers,
    // body: hdataString,
    // };

    // var hres = srequset('POST', `http://${USER}:${PASS}@127.0.0.1:${PORT}`, hoptions);
    // var hheight= JSON.parse(hres.body.toString()).result;

    // console.log(hheight);
    // for (let i = test; i < hheight; i++) {
    //     var dataString = `{
    //                 "jsonrpc":"1.0", 
    //                 "id":"${ID_STRING}", 
    //                 "method":"getblockhash",
    //                 "params":[${i}]
    //                 }`;
    //     var options = {
    //         headers: headers,
    //         body: dataString,
    //     };
        
    //     var res = srequset('POST', `http://${USER}:${PASS}@127.0.0.1:${PORT}`, options);
    //     var hash = JSON.parse(res.body.toString()).result;
    //     // console.log(hash);
    
    //     var sdataString = `{
    //                     "jsonrpc":"1.0", 
    //                     "id":"${ID_STRING}", 
    //                     "method":"getblock",
    //                     "params":["${hash}"]
    //                     }`;
    
    //     var soptions = {
    //         headers: headers,
    //         body: sdataString,
    //     }
    
    //     var res1 = srequset('POST', `http://${USER}:${PASS}@127.0.0.1:${PORT}`, soptions);
    //     var data = JSON.parse(res1.body.toString()).result;
    
    //     const blockdata = [data.bits, data.chainwork, data.confirmations, String(data.difficulty), data.hash, data.height, data.mediantime, data.merkleroot, data.nextblockhash, data.nonce, data.previousblockhash || "", data.size, data.strippedsize, data.time, data.tx.join('/') || "", data.version, data.versionHex, data.weight];
    //     const sql = `INSERT INTO kuosblockdata 
    //                 (bits, chainwork, confirmations, difficulty, hash, height, 
    //                 mediantime, merkleroot, nextblockhash, nonce, previousblockhash, size, 
    //                 strippedsize, time, tx, version, versionHex, weight) 
    //                 VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
    
    //     connection.query(sql, blockdata);
    //     console.log(i);
    // }
// }, 3000 )


app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); app.use(cors(corsOptions)); app.use("/", router); 

app.listen(port, () => {console.log(`Server is running at port ${port}...`)})