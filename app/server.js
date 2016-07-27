var express = require("express");
var app = express();

// app.get('/',function(req, res) {
// 	res.send("Hello world from server.js")
// });

//serve up index.html
app.use(express.static("./"));

app.get('/techstack',function(req,res) {
	// console.log("I recieved GET request")

// var techStack = [
// {
	
// 	sl : 1,
// 	name : "AngularJS",
// 	status : "in-progress",
// 	complexity : "high"
// },
// {
	
// 	sl : 2,
// 	name : "MongoDb",
// 	status : "in-progress",
// 	complexity : "high"
// },
// {
	
// 	sl : 3,
// 	name : "Bootstrap",
// 	status : "in-progress",
// 	complexity : "high"
// },
// {
	
// 	sl : 4,
// 	name : "HTML5",
// 	status : "in-progress",
// 	complexity : "high"
// },
// {
	
// 	sl : 5,
// 	name : "CSS",
// 	status : "Done",
// 	complexity : "medium"
// }];
// 	res.json(techStack);

// });

app.listen(3000);
console.log("server running on port 3000");




