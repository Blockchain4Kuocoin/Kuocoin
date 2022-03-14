const con = require("../utils/mysqlcon");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");

modelExports.login_Models = () => {
    const id = controllers.lid;
    const pw = controllers.lpw;

    return new Promise((resolve, reject) => {

        const sql = "SELECT * FROM userinfo where userid = ? and userpw = ?;";

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb connection success!");
                connection.query(sql, [id, pw], (err, result)=>{
                    if(err) {
                        throw err;
                    } 
                    if (result.length === 1) resolve({msg: "success!"});
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

modelExports.signup_Models = () => {
    const id = controllers.sid;
    const pw = controllers.spw;
    const name = controllers.sname;

    return new Promise((resolve, reject) => {

        const sql = `SELECT * FROM userinfo WHERE userid="${id}"`;
        const sql1 = `INSERT INTO userinfo (userid, userpw, username) VALUES ("${id}", "${pw}", "${name}")`;

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb connection success!");

                connection.query(sql, (err, result) => {
                    if (err) throw err;
                    if (result.length !== 0) resolve({msg: "user already exists!"});
                    else {
                        connection.query(sql1, (err, result1) => {
                            if(err) {
                                throw err;
                            } else {
                                resolve({msg: "success!"});
                            }    
                        });
                    };
                    connection.release();
                })

            } catch (err) {
                console.log("Signup get error...");
                console.error(err);
                connection.release();
            };
        });
    });      
};