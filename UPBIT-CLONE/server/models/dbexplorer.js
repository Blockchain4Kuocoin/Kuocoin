const request = require("request");
const con = require("../utils/mysqlcon");

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
const arr = [...Array(6701).keys()];
// console.log(arr); 

arr.forEach((val) => {
    var fdataString = `{
        "jsonrpc":"1.0", 
        "id":"${ID_STRING}", 
        "method":"getblockhash",
        "params":[${val+1}]
    }`;

    var foptions = {
        url: `http://${USER}:${PASS}@127.0.0.1:${PORT}`,
        method: "POST",
        headers: headers,
        body: fdataString,
    };

    const fcallback = (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);

            var dataString = `{
                "jsonrpc":"1.0", 
                "id":"${ID_STRING}", 
                "method":"getblock",
                "params":["${data.result}"]
                }`;
            
            var options = {
                url: `http://${USER}:${PASS}@127.0.0.1:${PORT}`,
                method: "POST",
                headers: headers,
                body: dataString,
            };

            const callback = (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    console.log(val);
                    const data = JSON.parse(body).result;
                    // console.log(data);
                    const blockdata = [data.bits, data.chainwork, data.confirmations, String(data.difficulty), data.hash, data.height, data.mediantime, data.merkleroot, data.nextblockhash, data.nonce, data.previousblockhash, data.size, data.strippedsize, data.time, data.tx.join('/'), data.version, data.versionHex, data.weight];
                    return new Promise((resolve, reject) => {
            
                        const sql = `INSERT INTO blockdata 
                                    (bits, chainwork, confirmations, difficulty, hash, height, 
                                    mediantime, merkleroot, nextblockhash, nonce, previousblockhash, size, 
                                    strippedsize, time, tx, version, versionHex, weight) 
                                    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
                
                        con.getConnection((err, connection) => {
                            try {
                                if (err) throw err;
                                console.log("mysqldb connection success!");
                                connection.query(sql, blockdata, (err, result)=>{
                                    if(err) {
                                        throw err;
                                    } 
                                    console.log("success!")
                                });
                                connection.release();
                
                            } catch (err) {
                                console.log("Blockdata error...");
                                console.error(err);
                                connection.release();
                            };
                        });
                    });      
                }
            }    
            request(options, callback);
        }
    }
    request(foptions, fcallback);
});

