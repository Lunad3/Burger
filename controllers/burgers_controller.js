var express = require("express");
var router = express.Router();
var Burgers = require("../models/burger.js");

router.get("/",function(req,res){
    Burgers.selectAll(function(data){
        var burgersObj = {
            burgers: data
        };
        console.log(burgersObj);
        res.render("index",burgersObj);
    });
});

router.post("/api/burgers",function(req,res){
    Burgers.insertOne(req.body.burger_name,function(result){
        res.json({id: result.id});
    });
});

router.put("/api/burgers/:id",function(req,res){
    console.log("condition: id=" + req.params.id);
    Burgers.updateOne(req.params.id,req.body.devoured,function(result){
        if(result.changedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;