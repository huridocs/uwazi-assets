var gulp          = require('gulp');
var jade          = require('gulp-jade');
var data          = require('gulp-data');
var sass          = require('gulp-ruby-sass');
var autoprefixer  = require('gulp-autoprefixer');
var clean					= require('gulp-clean');
var	browserSync 	= require('browser-sync');
var reload      	= browserSync.reload;
var runSequence 	= require('run-sequence');

/******************************************************************************/

var src = {
	templates: 	'./src/**/*.jade',
  styles: 		'./src/styles/**/*.scss',
	scripts: 		'./src/scripts/*.js'
};

var dist = {
	templates: 	'./dist/',
	styles: 		'./dist/styles/',
	scripts: 		'./dist/scripts/'
};

var bower = {
	styles: [
		'./bower_components/bootstrap/dist/css/bootstrap.min.css'
	],
	scripts: [
		'./bower_components/bootstrap/dist/js/bootstrap.min.js',
		'./bower_components/jquery/dist/jquery.min.js',
	],
};

/******************************************************************************/

gulp.task('serve', function() {

    browserSync({
        server: "./dist",
				notify: false
    });

    gulp.watch(src.styles, ['styles']);
    gulp.watch(src.templates, ['templates']);
		gulp.watch(src.scripts, ['scripts']);

});

/******************************************************************************/

gulp.task('clean', function() {
		return gulp.src('./dist', {read: false})
					.pipe(clean());
});

/******************************************************************************/

gulp.task('templates', ['templates:src']);

gulp.task('templates:src', function() {
    return gulp.src(src.templates)
				.pipe(data(function(file) {
		      return require('./src/data/documents.json');
		    }))
        .pipe(jade({ pretty: true }))
        .pipe(gulp.dest(dist.templates))
        .on("end", reload);
});

/******************************************************************************/

gulp.task('styles', ['styles:src', 'styles:bower']);

gulp.task('styles:src', function() {
		return 	sass(src.styles, { style: 'compressed' })
	    .pipe(autoprefixer('last 2 version'))
	    .pipe(gulp.dest(dist.styles))
			.pipe(reload({stream: true}));
});

gulp.task('styles:bower', function() {
	return gulp.src(bower.styles)
		.pipe(gulp.dest(dist.styles));
});

/******************************************************************************/

gulp.task('scripts', ['scripts:src', 'scripts:bower']);

gulp.task('scripts:src', function() {
  return gulp.src(src.scripts)
		.pipe(gulp.dest(dist.scripts))
		.on("end", reload);
});

gulp.task('scripts:bower', function() {
	return gulp.src(bower.scripts)
		.pipe(gulp.dest(dist.scripts));
});

/******************************************************************************/

gulp.task('default', function(callback) {
  runSequence('clean', ['templates', 'styles', 'scripts'], 'serve');
});
