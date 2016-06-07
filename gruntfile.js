module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concurrent: {
            dev: ['watch', 'nodemon'],
            options: {
                logConcurrentOutput: true
            }
        },
        nodemon: {
            all: {
                script: 'server.js',
                options: {
                    watchedExtensions: ['js'],
                    ignore: ['public/**']
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ["css"],
                    compress: false
                },
                files: {
                    "assets/css/app.css": "assets/less/app.less"
                },
                cleancss: true
            },
            production: {
                options: {
                    paths: ["css"],
                    compress: true
                },
                files: {
                    "assets/css/app.min.css": "assets/less/app.less"
                },
                cleancss: true
            }
        },
        copy: {
            jquery: {
                files: [{
                    expand: true,
                    cwd: 'assets/vendors/jquery/dist',
                    src: ['**/*.min.js'],
                    dest: 'public/js/vendors/jquery',
                    filter: 'isFile'
                }]
            },
            css: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['assets/css/*.css'],
                    dest: 'public/css',
                    filter: 'isFile'
                }]
            },
            js: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['assets/js/*.js'],
                    dest: 'public/js',
                    filter: 'isFile'
                }]
            }
        },
        watch: {
            css: {
                files: "assets/less/*.less",
                tasks: ['less', 'copy'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Load the plugin that provides the "less" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');

    // Default task(s).
    grunt.registerTask('default', ['less', 'copy', 'concurrent']);

};
