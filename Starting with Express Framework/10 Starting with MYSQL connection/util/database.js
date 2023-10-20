const mysql= require("mysql2");

const pool = mysql.createPool({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: 'root',
    database: 'node-complete'
  });
//localhost:3308
  module.exports=pool.promise();