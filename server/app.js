/**
 * Created by Skyler DeGrote on 10/6/15.
 */
/* server side app.js */

var express = require("express");
var app = express();
var index = require("./routes/index");

app.use("/", index);


app.set("port", (process.env.PORT || 5000));

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;
