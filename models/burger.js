var orm = require("../config/orm.js");

var burgers = {
    selectAll:function(run){
        orm.selectAll(run);
    },
    insertOne:function(name,run){
        orm.insertOne(name,run);
    },
    updateOne:function(index,newName,run){
        orm.updateOne(index,newName,run);
    }
}

module.exports = burgers;