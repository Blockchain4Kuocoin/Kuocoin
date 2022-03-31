const con = require("../utils/mysqlcon");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");

modelExports.explorer_Models = () => {
  const pHeight = controllers.height

  return new Promise((resolve, reject) => {
    
      const sql = `SELECT * FROM kuosblockdata WHERE height = ${pHeight};`;
      const sql1 = `SELECT * FROM kuosblockdata`;

      con.getConnection((err, connection) => {
        try {
            if (err) throw err;
            console.log("mysqldb(explorer) connection success!");
            connection.query(sql,[pHeight], (err, result)=>{
                if(err) {
                    throw err;
                } else {
                  connection.query(sql1, (err, result1) => {
                      let txcount = 0;
                      result1.forEach((data) => {
                          txcount += data.tx.split('/').length;
                      })
                      resolve({data: result, txcount: txcount})
                  })
                    console.log(result);
                }    
            });
            connection.release();
        } catch (err) {
            console.log("mysqldb(explorer) connection error...");
            console.error(err);
            connection.release();
        };
    });
  });
};

modelExports.blockHeight_Models = () => {    
    return new Promise((resolve, reject) => {

        const sql = `SELECT count(height) AS countheights FROM kuosblockdata;`;

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb(blockHeight) connection success!");
                connection.query(sql, (err, result)=>{
                    if(err) {
                        throw err;
                    } else {
                        resolve(result[0]);
                        console.log(result[0]);
                        // resolve({height: result[0]['count(height)']})
                    }    
                });
                connection.release();

            } catch (err) {
                console.log("mysqldb(blockHeight) connection error...");
                console.error(err);
                connection.release();
            };
        });
    });      
};

modelExports.latestBlocks_Models = () => {
    return new Promise((resolve, reject) => {

        const sql = `SELECT height, hash, mediantime FROM kuosblockdata ORDER BY height desc LIMIT 3;`;

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb(latestBlocks) connection success!");
                connection.query(sql, (err, result)=>{
                    if(err) {
                        throw err;
                    } else {
                        resolve(result);
                        console.log(result);
                    }    
                });
                connection.release();

            } catch (err) {
                console.log("mysqldb(latestBlocks_Models) connection get error...");
                console.error(err);
                connection.release();
            };
        });
    });      
};

modelExports.countAddresses_Models = () => {    
    return new Promise((resolve, reject) => {

        const sql = `SELECT count(wal_id) AS countAddresses FROM walletinfo;`;

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb(countAddresses) connection success!");
                connection.query(sql, (err, result)=>{
                    if(err) {
                        throw err;
                    } else {
                        resolve(result[0]);
                        console.log(result[0]);
                        // resolve({height: result[0]['count(height)']})
                    }    
                });
                connection.release();

            } catch (err) {
                console.log("mysqldb(countAddresses) connection error...");
                console.error(err);
                connection.release();
            };
        });
    });      
};