const request = require("request");
const con = require("../utils/mysqlcon");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");

const dotenv = require('dotenv');
dotenv.config();

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;
const PORT = 9776;
const ACCOUNT = "kuos";
const ID_STRING = "kuoscoin_id";
const headers = {
    "content-type" : "text/plain;"
};

modelExports.post_Models = () => {
    const walid = controllers.walid;

    return new Promise((resolve, reject) => {

        const sql = "SELECT * FROM walletinfo where wal_id = ? and owner = ?;";
        const sql1 = "INSERT INTO walletinfo (wal_id, owner, wal_addr, balance) VALUES ()"

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb connection success!");
                connection.query(sql, [walid, owner], (err, result)=>{
                    if(err) {
                        throw err;
                    } 
                    if (result.length !== 0) {
                        resolve({msg: "user already exists!"});
                    }
                    else {
                        var dataString = `{
                            "jsonrpc":"1.0", 
                            "id":"${ID_STRING}", 
                            "method":"getnewaddress",
                            "params":["${account}"]
                        }`;
                    
                        var options = {
                            url: `http://${USER}:${PASS}@127.0.0.1:${PORT}`,
                            method: "POST",
                            headers: headers,
                            body: dataString,
                        };
                
                        callback = (error, response, body) => {
                            if (!error && response.statusCode == 200) {
                                const data = JSON.parse(body);
                                let wal_addr = data.result;
                                conn
                            }
                        }
                        request(options, callback);
                    }    
                });
                connection.release();

            } catch (err) {
                console.log("Login get error...");
                console.error(err);
                connection.release();
            };
        });
    });      
};