module.exports = function(grunt) {
    // require it at the top and pass in the grunt instance
    require('time-grunt')(grunt);

    // 加载包含所有任务的插件。
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        copy : {
            init : {
                files:{
                    '../':'**'
                }
            }
        },
        clean : {
            dist : {
                src : ['grunt-mobile/']
            }
        }
    });

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['uglify']);

};