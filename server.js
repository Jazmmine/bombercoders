var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.listen(1411, function () {
	console.log("listen:1411");
});