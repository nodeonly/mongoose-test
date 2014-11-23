var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha'); 
var gp_deploy = require('gulp-gh-pages');
var open = require("gulp-open");
var rename = require("gulp-rename");
require('shelljs/global');


gulp.task('test', function (cb) {
  gulp.src(['db/**/*.js'])
    .pipe(istanbul()) // Covering files
    .on('finish', function () {
      gulp.src(['test/*.js'])
        .pipe(mocha({
					ui : 'bdd',
					reporter: 'spec'
				}))
        .pipe(istanbul.writeReports()) // Creating the reports after tests runned
        .on('end', cb);
    });
});

gulp.task('default',['test'], function() {
  gulp.watch(['./db/**/*','./test/**/*'], ['test']);
});

gulp.task('watch',['test'], function() {
  gulp.watch(['./db/**/*','./test/**/*'], ['test']);
});

var options = {}
gulp.task('deploy', function () {
    return gulp.src('./preview/**/*')
        .pipe(gp_deploy(options));
});

gulp.task('rename',function () {
	if (exec('cp ./preview/README.html ./preview/index.html').code !== 0) {
	  echo('Error: rename exec failed');
	  exit(1);
	}	
});

gulp.task('generate',function () {
	// Run external tool synchronously
	if (exec('sh ./generate.sh').code !== 0) {
	  echo('Error: generate.sh exec failed');
	  exit(1);
	}	
});

gulp.task('doc',['generate', 'rename', 'deploy'] ,function () {
    console.log('default');
});