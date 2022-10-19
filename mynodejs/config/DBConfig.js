const mysql = require("mysql");

let conn = mysql.createConnection({
    host : "127.0.0.1",
    user : "gisuser",
    password : "gispass",
    port : "3306",
    database : "mynodejs_db"
})

module.exports = conn;