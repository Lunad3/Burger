var express = require("express");
var bParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static("public"));
app.use(bParser.urlencoded({extended:true}));
app.use(bParser.json());

var handlebars = require("express-handlebars");
app.engine("handlebars",handlebars({defaultLayout:"main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");
app.use(routes);

app.listen(PORT,function(){
    console.log("App now listenig at localhost:" + PORT)
});