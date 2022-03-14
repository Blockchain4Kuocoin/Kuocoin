const con = require("../utils/mysqlcon");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");

modelExports.mypage_ProfileGet_Models = () => {
    
    const id = controllers.mid;
    return new Promise((resolve, reject) => {

        const sql = `SELECT * FROM userinfo WHERE userid = "${id}"`;

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
                console.log("Mypage get error...");
                console.error(err);
                connection.release();
            };
        });
    });      
};

modelExports.mypage_ProfilePut_Models = () => {
    const name = controllers.pname;
    const pw = controllers.ppw;
    const id = controllers.pid;

    return new Promise((resolve, reject) => {

        const sql = `UPDATE userinfo SET username = '${name}',  userpw = '${pw}' WHERE userid = '${id}'`;

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb connection success!");
                connection.query(sql, (err, result)=>{
                    if(err) {
                        throw err;
                    } else {
                        console.log("profile has successfully changed!");
                        resolve({msg: "success"});
                    }    
                });
                connection.release();

            } catch (err) {
                console.log("Mypage put error...");
                console.error(err);
                connection.release();
            };
        })
    })      
};
