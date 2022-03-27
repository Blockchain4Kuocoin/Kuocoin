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
        const sql3 = "UPDATE userinfo SET wallet=? WHERE userid = ?";

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
                                            if (result.length===1) {
                                                connection.query(sql3, [walid, owner], (err, result3) => {
                                                    if (err) throw err;
                                                    console.log("success!");
                                                    connection.release();
                                                });
                                            }
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

modelExports.order_Buy_Models = () => {
    const orderinfo = controllers.buyinfo;
    const owner = orderinfo.userid;
    const wal_id = orderinfo.wal;
    let balance;
    const coinSymbol = orderinfo.coinSymbol;
    let Amount = Number(orderinfo.orderAmount);
    const wal_addr = orderinfo.wal_addr;

    console.log("orderinfo:");
    console.log(orderinfo);

    if (coinSymbol === 'KUOS') {
        console.log('KUOS');
        console.log(wal_addr);
        var dataString = `{
            "jsonrpc":"1.0", 
            "id":"${ID_STRING}", 
            "method":"sendmany",
            "params":["kuoscoin", {"${wal_addr}": ${Amount}}]
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
                // console.log('kuos1')
                console.log(data);
            }
        }
        request(options, callback)

    }

    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM walletinfo WHERE wal_id = ? AND owner = ?;";
        const sql1= `UPDATE walletinfo SET ${coinSymbol}=?, balance=? WHERE wal_id = ? AND owner = ?;`;
        const sql2 = "SELECT * FROM walletinfo WHERE wal_id = ? AND owner = ?;";
        const sql3 = `INSERT INTO payment (userid, wal_id, coinname, quantity, price, method) VALUES (?,?,?,?,?,?);`
        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb connection success!");
                connection.query(sql, [wal_id, owner], (err, result) => {
                    if (err) throw err; 
                    Amount += Number(result[0][`${coinSymbol}`]);
                    balance = Number(result[0].balance) - orderinfo.orderPrice;
                    connection.query(sql1, [String(Amount), String(balance), wal_id, owner], (err, result1) => {
                        if (err) throw err;
                        connection.query(sql3,[owner, wal_id, coinSymbol, String(Amount), orderinfo.orderPrice, 'B'], (err, result3) => {
                            if (err) throw err;
                            connection.query(sql2, [wal_id, owner], (err, result2) => {
                                if (err) throw err;
                                resolve(result2[0]);
                                connection.release();
                            });
                        })
                    })
                })
            } catch (err) {
                console.log("Wallet put error...");
                console.error(err);
            };
        });
    });  
}

modelExports.order_Sell_Models = () => {
    const orderinfo = controllers.sellinfo;
    const owner = orderinfo.userid;
    const wal_id = orderinfo.wal;
    let balance;
    const coinSymbol = orderinfo.coinSymbol;
    let Amount;
    const wal_addr = orderinfo.wal_addr;

    console.log("orderinfo:");
    console.log(orderinfo);

    if (coinSymbol === 'KUOS') {
        console.log('KUOS');
        console.log(wal_addr);
        var dataString = `{
            "jsonrpc":"1.0", 
            "id":"${ID_STRING}", 
            "method":"sendmany",
            "params":["${wal_id}", {"KBoxq2jS7eZRDrsLBJ2B9iDKMwQpyKztz1": ${orderinfo.orderAmount}}]
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
                // console.log('kuos1')
                console.log(data);
            }
        }
        request(options, callback)

    }

    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM walletinfo WHERE wal_id = ? AND owner = ?;";
        const sql1= `UPDATE walletinfo SET ${coinSymbol}=?, balance=? WHERE wal_id = ? AND owner = ?;`;
        const sql2 = "SELECT * FROM walletinfo WHERE wal_id = ? AND owner = ?;";
        const sql3 = `INSERT INTO payment (userid, wal_id, coinname, quantity, price, method) VALUES (?,?,?,?,?,?);`
        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb connection success!");
                connection.query(sql, [wal_id, owner], (err, result) => {
                    if (err) throw err; 
                    Amount = Number(result[0][`${coinSymbol}`])-Number(orderinfo.orderAmount);
                    balance = Number(result[0].balance) + orderinfo.orderPrice;
                    connection.query(sql1, [String(Amount), String(balance), wal_id, owner], (err, result1) => {
                        if (err) throw err;
                        connection.query(sql3, [owner, wal_id, coinSymbol, orderinfo.orderAmount, String(orderinfo.orderPrice), 'S'], (err, result3) => {
                            if (err) throw err;
                            connection.query(sql2, [wal_id, owner], (err, result2) => {
                                if (err) throw err;
                                resolve(result2[0]);
                                connection.release();
                            })
                        })
                    })
                })
            } catch (err) {
                console.log("Wallet put error...");
                console.error(err);
            };
        });
    });  
}

modelExports.userinfo_Wallet_Models = () => {
    const data = controllers.userwallet;

    return new Promise((resolve, reject) => {
        const sql = "UPDATE userinfo SET wallet=? WHERE userid=?;";
    
        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb connection success!");
                connection.query(sql, [data.wallet, data.userid], (err, result) => {
                    if (err) throw err; 
                    console.log("success!")
                    resolve(result);
                })
            } catch (err) {
                console.log("Userinfo wallet put error...");
                console.error(err);
            };
        });
    });  
}

