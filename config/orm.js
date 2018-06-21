var db = require("../config/connection");

var orm = {
    selectAll:function(table,run){
        db.query("SELECT * FROM " + table + ";", function(err,result){
            if(err) throw err;
            run(result);
        });
    },
    insertOne:function(table,name,run){
        db.query("INSERT INTO " + table + " (burger_name) Values")

    },
    //updateOne:
    selectAll:function(){},
}

module.exports = orm;