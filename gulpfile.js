/* Servidor web gulp para desarrollo 
*/
var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('server', function() {
	connect.server({
		port: 9001,
		host: 'upeu.pe'
	});
});
