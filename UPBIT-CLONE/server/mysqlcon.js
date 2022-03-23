const mysql = require('mysql');
const config = require('./mydbsql.json'); // comp 파일에 중요한 정보가 들어감 db접속 정보담긴다.

module.exports = mysql.createPool(config);