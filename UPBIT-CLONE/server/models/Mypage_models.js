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
                    } 
                    resolve(result[0]);
                    console.log(result[0]);
                    connection.release();
                });

            } catch (err) {
                console.log("Mypage get error...");
                console.error(err);
            };
        });
    });      
};

modelExports.mypage_ProfilePut_Models = () => {
    const name = controllers.pname;
    const pw = controllers.ppw;
    const id = controllers.pid;
    console.log(name, pw, id);

    return new Promise((resolve, reject) => {

        const sql = `UPDATE userinfo SET username = '${name}',  userpw = '${pw}' WHERE userid = '${id}'`;
        const sql1 = `SELECT * FROM userinfo WHERE userid="${id}";`;

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb connection success!");
                connection.query(sql, (err, result)=>{
                    if(err) {
                        throw err;
                    } 
                    console.log("profile has successfully changed!");
                    connection.query(sql1, (err, result1) => {
                        if (err) throw err;
                        resolve(result1[0]);
                        connection.release();
                    })
                });

            } catch (err) {
                console.log("Mypage put error...");
                console.error(err);            };
        })
    })      
};
