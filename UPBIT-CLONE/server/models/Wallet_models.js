const request = require("request");
const con = require("../utils/mysqlcon");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");

const dotenv = require('dotenv');
dotenv.config();

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;
const PORT = 9554;
const ACCOUNT = "kuos";
const ID_STRING = "kuoscoin_id";
const headers = {
    "content-type" : "text/plain;"
};

modelExports.post_Models = () => {
    console.log(USER, PASS);
    const walid = controllers.walid;
    const owner = controllers.owner;
    console.log(walid, owner);

    return new Promise((resolve, reject) => {

        const sql = "SELECT * FROM walletinfo where wal_id = ? and owner = ?;";
        const sql1 = "INSERT INTO walletinfo (wal_id, owner, wal_addr, balance) VALUES (?,?,?,?)";
        const sql2 = "SELECT * FROM walletinfo where owner = ?;"

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb connection success!");
                connection.query(sql, [walid, owner], (err, result)=>{
                    if(err) throw err; 
                    if (result.length !== 0) {
                        resolve("user already exists!");
                    }
                    else {
                        var dataString = `{
                            "jsonrpc":"1.0", 
                            "id":"${ID_STRING}", 
                            "method":"getnewaddress",
                            "params":["${walid}"]
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
                                console.log(wal_addr);
                                try {
                                    connection.query(sql1, [walid, owner, wal_addr, 0], (err, result) => {
                                        if (err) throw err;
                                        console.log("Wallet info inserted successfully!");
                                        
                                        connection.query(sql2, [owner], (err, result) => {
                                            console.log("data read success!");
                                            resolve(result);
                                            connection.release();
                                        })
                                    });
                                }
                                catch (err) {
                                    console.log("Wallet insert error...");
                                    console.error(err);
                                }
                            }
                        }

                        request(options, callback);
                    }    
                });

            } catch (err) {
                console.log("Wallet read error...");
                console.error(err);

            };
        });
    });      
};


modelExports.get_Models = () => {
    const owner = controllers.gowner;
    console.log(owner);
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM walletinfo where owner = ?;";
        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb connection success!");
                connection.query(sql, [owner], (err, result)=>{
                    if (err) throw err; 
                    resolve(result);
                });
            } catch (err) {
                console.log("Wallet get error...");
                console.error(err);
            };
        });
    });    
}

modelExports.balance_put_Models = () => {
    const data = controllers.wbdata;
    const wal_id = data.wal_id;
    const owner = data.owner;
    let balance = Number(data.balance);

    console.log("data:");
    console.log(data);

    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM walletinfo WHERE wal_id = ? AND owner = ?;";
        const sql1 = "UPDATE walletinfo SET balance = ? WHERE wal_id = ? AND owner = ?;"
        const sql2 = "SELECT * FROM walletinfo WHERE owner = ?;";

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb connection success!");
                connection.query(sql, [wal_id, owner], (err, result)=>{
                    if (err) throw err; 
                    balance += Number(result[0].balance);
                    connection.query(sql1, [balance, wal_id, owner], (err, result) => {
                        if (err) throw err;
                        connection.query(sql2, [owner], (err, result) => {
                            if (err) throw err;
                            resolve(result);
                            connection.release();
                        })
                    })
                });
            } catch (err) {
                console.log("Wallet put error...");
                console.error(err);
            };
        });
    });  
}
