var gulp = require('gulp');
// browser-sync for live reload of application from current working directory thru "./"
var browserSync = require('browser-sync').create();
// historyapifallback to help overcome page refersh issue in angularjs
var historyApiFallback = require('connect-history-api-fallback');
// load express module
var express = require("express");
// bootstrap express
var app = express();
// load mongoose for mongodb connection
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var techGetSchema = new Schema ({
	sl: Number,
	name: String,
	status: String,
	complexity: String
});

// // gulp task to serve up browser sync along with livereload and historyapi fallback to resolve 
// // browser refresh issue
gulp.task('serve', function() {
  // browserSync.init({
  //   server: {
  //     baseDir: "./",
  //     middleware: [ historyApiFallback() ]
  //   }
  // });

  // // browser sync init can't function with server and proxy options. using proxy below as node triggers 
  // // db coonection in port 3000 and browser sync is triggered in port 3001
  browserSync.init({
        port: 3001,
        proxy: {
            target: "localhost:3000",
            ws: true,
  		    middleware: [ historyApiFallback() ]
        }
    });
  
// make gulp watch all files/directories inside project root folder 'app' to reload browser
  gulp.watch("**.*").on('change', browserSync.reload);

});


gulp.task('default',['serve'], function() {
  // no default task for now
});

//serve up index.html
app.use(express.static("./"));

mongoose.connect('mongodb://localhost/test', function(error) {
	if(error) console.log(error);
});

var Tech = mongoose.model('technology', techGetSchema);
module.exports = Tech;

// get data from remote db
app.get('/techstack',function(req,res) {
	Tech.find({},function(err,result) {
		if (err) throw err;
		console.log("im here")
		console.log(result);
		res.send(result);
	});
});

mongoose.connection.on('error',console.error);
mongoose.connection.once('open',startServer);

function startServer(){
	var server = app.listen(3000, function () {
		var port = server.address().port;
		console.log('Listening on port ' + port);
	})
};