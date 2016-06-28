// Get modules
var gulp    = require('gulp'),
sass        = require('gulp-sass'),
rename      = require('gulp-rename'),
imagemin    = require('gulp-imagemin'),
concat      = require('gulp-concat'),
cssmin      = require('gulp-cssmin'),
jshint      = require('gulp-jshint'),
gulpif      = require('gulp-if'),
sourcemaps  = require('gulp-sourcemaps'),
bower       = require('gulp-bower'),
gulpFilter  = require('gulp-filter'),
minify      = require('gulp-minify'),
del         = require('del'),
runSequence = require('run-sequence'),
include     = require("gulp-include"),
argv        = require('yargs').argv;

var env = process.env.NODE_ENV || 'develop';
// for production run: NODE_ENV=production gulp [task]

var jsBundler = function(srcArr, filename, combine, dest, callback) {
	combine = (typeof combine === 'undefined') ? true : combine;
	dest    = (typeof dest === 'undefined') ? '../../public/assets/scripts' : dest;
	return gulp.src(srcArr)
	.pipe(gulpif(env === 'development', sourcemaps.init({loadMaps: true})))
	.pipe(jshint.reporter('default'))
	.pipe(gulpif(combine, concat(filename)))
	.pipe(include())
	.on('error', console.log)
	.pipe(minify({ ext: '.min.js'}))
	.pipe(gulpif(env === 'development', sourcemaps.write()))
	.pipe(gulp.dest(dest))
	.on('finish', function() {
		cleanup('../../public/assets/scripts/');
		if(typeof callback === 'function') { callback(); }
	});
};

var cssBundler = function(srcArr, filename, dest, callback) {
	var sassFilter = gulpFilter('**/*.scss');
	dest    = (typeof dest === 'undefined') ? '../../public/assets/styles' : dest;
	return gulp.src(srcArr)
	.pipe(gulpif(env === 'development', sourcemaps.init({loadMaps: true})))
	.pipe(sassFilter)
	.pipe(sass())
	.pipe(sassFilter.restore())
	.pipe(concat(filename))
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulpif(env === 'development', sourcemaps.write()))
	.pipe(gulp.dest(dest))
	.on('finish', function() {
		if(typeof callback === 'function') { callback(); }
	});
};

var assetCopy = function(srcArr, relativePath) {
	var dest = '../../public/assets/' + relativePath;
	return gulp.src(srcArr)
	.pipe(gulp.dest(dest));
};

var cleanup = function(path, callback) {
	var srcArr = [path + '*.js', '!' + path + '*.min.js'];
	del.sync(srcArr, {force: true});
	if(typeof callback === 'function') { callback(); }
}

var processImages = function(images, dest) {
		return gulp.src(images)
			.pipe(imagemin())
			.pipe(gulp.dest(dest));
}

gulp.task('images', function () {
	return processImages(['assets/imgs/**.{png,gif,jpg}'], '../../public/assets/media');
});

gulp.task('_libsScript', function () {
	return jsBundler([
		'bower_components/underscore/underscore.js',
		'bower_components/requirejs/require.js'
	], 'libs.js');
});

gulp.task('_libsStyle', function () {
	return cssBundler([
		// some styles
	], 'libs.css');
});

gulp.task('_libsFont', function () {
	return assetCopy([
		// some files
	], 'fonts');
});

gulp.task('_libsCleanup', function() {
	cleanup('../../public/assets/scripts/');
});

// CLI package builder
// gulp build --package=core
gulp.task('build', function() {
	if(typeof argv.package !== 'undefined') {
		buildPackage(argv.package).run();
	}
});

var buildPackage = function(name, callback) {
	console.info('Building Package :: ' + name);
	return new function() {
		this.run = function() {
			console.info('Running Package :: ' + name);
			return jsBundler([
				'assets/js/core.js',
				'assets/js/app.js',
				'assets/js/' + name + '.js',
			], name + '.js', undefined, undefined, function() {
				cssBundler([
					'assets/css/core.scss',
					'assets/css/' + name + '.scss',
				], name + '.css', undefined, function() {
					if(typeof callback === 'function') { callback(); }
				});
			});
		};
	};
};

// build all listed packages
gulp.task('buildPackages', function() {
	var packages = ['core', 'auth', 'editor'],
	builder      = false;
	console.log('Building all packages', packages);
	for(var i in packages) {
		if(!builder) { builder = buildPackage(packages[i]); }
		else { builder = buildPackage(packages[i], builder.run); }
	}
	console.log('Running all packages');
	builder.run();
});

gulp.task('libs', function() { runSequence('_libsScript', '_libsStyle', '_libsFont', '_libsCleanup'); });
gulp.task('default', function() { runSequence('libs', 'buildPackages'); });
