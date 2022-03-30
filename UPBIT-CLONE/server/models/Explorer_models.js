const con = require("../utils/mysqlcon");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");

modelExports.explorer_Models = () => {
  const pHeight = controllers.height
  return new Promise((resolve, reject) => {
    
      const sql = `SELECT * FROM kuosblockdata WHERE height = ?;`;

      con.getConnection((err, connection) => {
          try {
              if (err) throw err;
              console.log("mysqldb connection success!");
              connection.query(sql,[pHeight], (err, result)=>{
                  if(err) {
                      throw err;
                  } else {
                      resolve(result);
                      console.log(result);
                  }    
              });
              connection.release();

          } catch (err) {
              console.log("get error...");
              console.error(err);
              connection.release();
          };
      });
  });
};

modelExports.blockheight_Models = () => {
    
    const heights = controllers.blocks;
    return new Promise((resolve, reject) => {

        const sql = `SELECT count(height) AS countheights FROM kuosblockdata;`;

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("mysqldb connection success!");
                connection.query(sql, [heights], (err, result)=>{
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
                console.log("Mypage get error...");
                console.error(err);
                connection.release();
            };
        });
    });      
};