var db = require("../config/connection");

var orm = {
    selectAll:function(run){
        db.query("SELECT * FROM burgers;", function(err,result){
            if(err) throw err;
            run(result);
        });
    },
    insertOne:function(name,run){
        var queryStr = "INSERT INTO burgers (burger_name) VALUES ('" + name + "');";
        console.log(queryStr);
        db.query(queryStr,function(err,results){
            if (err) throw err;
            run(results);
        });
    },
    updateOne:function(index,newName,run){
        var queryStr = "UPDATE burgers SET burger_name='" + newName + "' WHERE id=" + id +";";
        db.query(queryStr,function(err,result){
            if(err) throw err;
            run(result);
        });
    }
}

module.exports = orm;