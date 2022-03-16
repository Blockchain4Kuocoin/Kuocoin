const con = require("../utils/mysqlcon");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");

modelExports.explorer_Models = () => {
  // return new Promise((resolve, reject) => {

  //     const sql = "SELECT * FROM testexplorer;";

  //     con.getConnection((err, connection) => {
  //         try {
  //             if (err) throw err;
  //             console.log("mysqldb connection success!");
  //             connection.query(sql, (err, result)=>{
  //                 if(err) {
  //                     throw err;
  //                 } else {
  //                     resolve(result);
  //                     console.log(result);
  //                 }    
  //             });
  //             connection.release();

  //         } catch (err) {
  //             console.log("get error...");
  //             console.error(err);
  //             connection.release();
  //         };
  //     });
  // });      
  const sqlQuery = "SELECT * FROM testexplorer;"
  pool.getConnection((err, connection) => {
    if(err) throw err;
    
    connection.query(sqlQuery, (err, result)=>{
      res.send(result);
      connection.release();
    })
  })
};