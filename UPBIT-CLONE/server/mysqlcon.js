const mysql = require('mysql');
const config = require('./mydbsql.json');

module.exports = mysql.createPool(config);