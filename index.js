const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
//app.set("views", path.join(__dirname, "views"));

router.get("/", (req, res) => {
	res.render("index");
  });

router.get("/contactus", (req, res) => {
	res.render("contactus");
});
	
app.use("/", router);

let port = process.env.PORT || 8081;
var server = app.listen(port, function () {
	var host = server.address().address;
	var port = server.address().port;
	//console.log(`Example app listening at http://${host}:${port}`)
});

console.log("Running at Port 3000");