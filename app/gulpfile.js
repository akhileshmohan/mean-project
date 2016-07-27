var gulp = require('gulp');
// browser-sync for live reload of application from current working directory thru "./"
var browserSync = require('browser-sync').create();
// historyapifallback to help overcome page refersh issue in angularjs
var historyApiFallback = require('connect-history-api-fallback');
// load express module
var express = require("express");
// bootstrap express
var app = express();
//serve up index.html
app.use(express.static("./"));
// load mongojs
var mongojs = require('mongojs');
var db = mongojs('test',['technology']);

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

// get data from db
app.get('/techstack',function(req,res) {
	db.technology.find({},function(err,result) {
		if (err) throw err;
		// console.log("im here");
		// console.log(result);
		res.json(result);
	});
});

app.listen(3000);
console.log('Listening on port 3000');