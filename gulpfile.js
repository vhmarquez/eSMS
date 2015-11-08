///////////////////////////////////////////////
// NODE MODULES
// =========================

var	gulp = require('gulp'),
	watch = require('gulp-watch'),
	rename = require('gulp-rename'),
	compass = require('gulp-compass'),
	minifyCSS = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	gulpConcat = require('gulp-concat');

// Default gulp tasks
gulp.task('default', function() {

});

// Compile SASS and Minify CSS
gulp.task('compass', function() {
	gulp.src('temp/sass/**/*.sass')
		.pipe(compass({
			css: 'temp/css',
			sass: 'temp/sass'
		}))
		.pipe(gulp.dest('temp/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('css'));
});

// Uglify JS
gulp.task('compress', function(){
	gulp.src(['temp/js/**/*.js', '!temp/js/animations.js'])
		.pipe(gulpConcat('*.js'))
		//.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js'));
});

// Uglify JS
gulp.task('compress-animations', function(){
	gulp.src('temp/js/animations.js')
		//.pipe(uglify())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('js'));
});


// Minify all CSS
gulp.task('minify-css', function(){
	gulp.src('temp/css/*.css')
		.pipe(rename({suffix: '.min'}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('css'));
});

// Watch Task
gulp.task('watch', function(){
	gulp.watch('temp/sass/**/*.sass', ['compass']);
	gulp.watch('temp/js/**/*.js', ['compress', 'compress-animations']);
});
