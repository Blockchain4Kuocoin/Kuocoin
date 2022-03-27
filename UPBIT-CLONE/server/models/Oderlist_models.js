const con = require("../utils/mysqlcon");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");

modelExports.orderlist_Models = () => {
    
    const orderList = controllers.orderList;
    console.log(orderList);
    return new Promise((resolve, reject) => {

        const sql = `SELECT * FROM payment WHERE userid = "${orderList.id}" AND coinname="${orderList.coinSymbol}"`;
        // const sql = `SELECT date_format(paytime, '%Y-%m-%d') FROM payment`
        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb connection success!");
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
                console.log("Orderlist get error...");
                console.error(err);
            };
        });
    });      
};
