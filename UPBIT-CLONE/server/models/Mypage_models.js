const con = require("../utils/mysqlcon");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");

modelExports.mypage_ProfileGet_Models = () => {
    return new Promise((resolve, reject) => {

        const sql = "SELECT * FROM kuoinfo;";

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
                console.log("Mypage get error...");
                console.error(err);
                connection.release();
            };
        });
    });      
};

modelExports.mypage_ProfilePut_Models = () => {
    const kuoname = controllers.kuoname;
    const kuopwd = controllers.kuopwd;
    const kuoadr = controllers.kuoadr;
    const id = controllers.id;

    return new Promise((resolve, reject) => {

        const sql = `UPDATE kuoinfo SET kuoname = '${kuoname}',  kuopwd = '${kuopwd}', kuoadr = '${kuoadr}' WHERE id = '${id}'`;

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
