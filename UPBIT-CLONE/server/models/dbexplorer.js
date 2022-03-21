const request = require("request");
const con = require("../utils/mysqlcon");
const dbconfig = require("../utils/mydbsql.json");

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
const PORT = 9776;
const ACCOUNT = "sky";
const ID_STRING = "kuoscoin_id";
const headers = {
    "content-type" : "text/plain;"
};
// console.log(USER, PASS);
let blockhash = "8f310888ad2ba2098f151359284c97967a68b3ad1ad9f7e09e026d8c8a8948ee"
const arr = [...Array(2000).keys()];
// console.log(arr); 
let tmp = [];

for (let i = 0 ; i < 1000; i++) {
    var dataString = `{
                "jsonrpc":"1.0", 
                "id":"${ID_STRING}", 
                "method":"getblockhash",
                "params":[${i+2000}]
                }`;
    var options = {
        headers: headers,
        body: dataString,
    };
    
    var res = srequset('POST', `http://${USER}:${PASS}@127.0.0.1:${PORT}`, options);
    var hash = JSON.parse(res.body.toString()).result;
    // console.log(hash);

    var sdataString = `{
                    "jsonrpc":"1.0", 
                    "id":"${ID_STRING}", 
                    "method":"getblock",
                    "params":["${hash}"]
                    }`;

    var soptions = {
        headers: headers,
        body: sdataString,
    }

    var res1 = srequset('POST', `http://${USER}:${PASS}@127.0.0.1:${PORT}`, soptions);
    var data = JSON.parse(res1.body.toString()).result;

    const blockdata = [data.bits, data.chainwork, data.confirmations, String(data.difficulty), data.hash, data.height, data.mediantime, data.merkleroot, data.nextblockhash, data.nonce, data.previousblockhash || "", data.size, data.strippedsize, data.time, data.tx.join('/') || "", data.version, data.versionHex, data.weight];
    const sql = `INSERT INTO blockdata 
                (bits, chainwork, confirmations, difficulty, hash, height, 
                mediantime, merkleroot, nextblockhash, nonce, previousblockhash, size, 
                strippedsize, time, tx, version, versionHex, weight) 
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;

    connection.query(sql, blockdata);
    console.log(i);
}

// arr.map((val) => {
//     var fdataString = `{
//         "jsonrpc":"1.0", 
//         "id":"${ID_STRING}", 
//         "method":"getblockhash",
//         "params":[${val}]
//     }`;

//     var foptions = {
//         url: `http://${USER}:${PASS}@127.0.0.1:${PORT}`,
//         method: "POST",
//         headers: headers,
//         body: fdataString,
//     };

//     request(foptions, (error, response, body) => {
//         console.log(val);
//     })

//     // fcallback = async (error, response, body) => {
//     //     if (!error && response.statusCode == 200) {
//     //         const data = await JSON.parse(body);

//     //         var dataString = `{
//     //             "jsonrpc":"1.0", 
//     //             "id":"${ID_STRING}", 
//     //             "method":"getblock",
//     //             "params":["${data.result}"]
//     //             }`;
            
//     //         var options = {
//     //             url: `http://${USER}:${PASS}@127.0.0.1:${PORT}`,
//     //             method: "POST",
//     //             headers: headers,
//     //             body: dataString,
//     //         };

    //         callback = async (error, response, body) => {
    //             if (!error && response.statusCode == 200) {
    //                 const data = await JSON.parse(body).result;
    //                 console.log(val);
    //                 // // console.log(data);
    //                 // const blockdata = [data.bits, data.chainwork, data.confirmations, String(data.difficulty), data.hash, data.height, data.mediantime, data.merkleroot, data.nextblockhash, data.nonce, data.previousblockhash || "", data.size, data.strippedsize, data.time, data.tx.join('/') || "", data.version, data.versionHex, data.weight];
    //                 // return new Promise((resolve, reject) => {
            
    //                 //     const sql = `INSERT INTO blockdata 
    //                 //                 (bits, chainwork, confirmations, difficulty, hash, height, 
    //                 //                 mediantime, merkleroot, nextblockhash, nonce, previousblockhash, size, 
    //                 //                 strippedsize, time, tx, version, versionHex, weight) 
    //                 //                 VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
                
    //                 //     con.getConnection((err, connection) => {
    //                 //         try {
    //                 //             if (err) throw err;
    //                 //             // console.log("mysqldb connection success!");
    //                 //             connection.query(sql, blockdata, (err, result)=>{
    //                 //                 if(err) {
    //                 //                     throw err;
    //                 //                 } 
    //                 //                 resolve(result);
    //                 //             });
    //                 //             connection.release();
                
    //                 //         } catch (err) {
    //                 //             console.log("Blockdata error...");
    //                 //             connection.release();
    //                 //             resolve(reject);
    //                 //         };
    //                 //     });
    //                 // });      
    //             }
    //         }

    //         request(options, callback);
    //     }
    // }

    // request(foptions, fcallback);

    
// });

