module.exports = function(grunt) {

    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Global Paths
	var base12Config = {
		app: '.',
		dist: 'dist'
	};

	// Project Configuration
	grunt.initConfig({

		b12: base12Config,
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			options: {
				port: 9000,
				livereload: 35729,
				hostname: 'localhost',
			},
			dist: {
				options: {
					open: true,
					base: '<%= b12.dist %>'
				}
			}
		},

		watch: {
			sass: {
				files: ['<%= b12.app %>/css/**/*.scss'],
				tasks: ['sass', 'autoprefixer', 'copy']
			},
			livereload: {
				options: { livereload: true },
				files: ['<%= b12.dist %>/**/*']
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'<%= b12.app %>/css/main.min.css' : '<%= b12.app %>/css/sass/main.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['> 1%', 'last 2 version', 'ie 8', 'ie 9', 'firefox 24', 'opera 12.1' ]
			},
			dist: {
				src: '<%= b12.app %>/css/main.min.css'
			}
		},

		copy: {
			sass: {
				src: '<%= b12.app %>/css/main.min.css', 
				dest: '<%= b12.dist %>/'
			}
		}

	});

	// Default Tasks
	grunt.registerTask('default', ['sass', 'copy', 'connect:dist', 'watch']);
}