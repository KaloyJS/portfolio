	var gulp     = require('gulp');
		

	



	gulp.task('copyGeneralFiles', function(){
		var pathsToCopy = [
			'./app/**/*'		
		]

		return gulp.src(pathsToCopy)
			.pipe(gulp.dest("./docs"));
	});


	