var mysql = require("mysql");

var db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "Luna",
    passwrod: "Papaya321",
    database:"burgers"
});

db.connect(function(err){
    if (err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = db;