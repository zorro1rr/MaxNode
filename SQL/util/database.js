const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  //name we setup for our schema
  database: "nodecomplete",
  // password we setup in mySQL
  password: "yvd151",
});

module.exports = pool.promise();
