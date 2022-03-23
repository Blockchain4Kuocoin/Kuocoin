const con = require("../utils/mysqlcon");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");

modelExports.post_Models = () => {
    const walid = controllers.walid;

    return new Promise((resolve, reject) => {

        const sql = "SELECT * FROM walletinfo where wal_id = ? and owner = ?;";

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb connection success!");
                connection.query(sql, [walid, owner], (err, result)=>{
                    if(err) {
                        throw err;
                    } 
                    if (result.length === 1) {
                        resolve({msg: "success!"});
                    }
                    else {
                        resolve({msg: "no data found"});
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