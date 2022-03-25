const con = require("../utils/mysqlcon");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");

modelExports.orderlist_Models = () => {
    
    const id = controllers.mid;
    return new Promise((resolve, reject) => {

        const sql = `SELECT * FROM payment WHERE userid = "${id}"`;
        // const sql = `SELECT date_format(paytime, '%Y-%m-%d') FROM payment`
        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb connection success!");
                connection.query(sql, (err, result)=>{
                    if(err) {
                        throw err;
                    } else {
                        resolve(result[0]);
                        console.log(result[0]);
                    }    
                });
                connection.release();

            } catch (err) {
                console.log("Payment get error...");
                console.error(err);
                connection.release();
            };
        });
    });      
};
