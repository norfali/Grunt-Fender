module.exports = function(grunt) {

  grunt.initConfig({
    globalConfig: grunt.file.readJSON('gruntconfig.json'),
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compile: {
        options: {
          bare: true,
          sourceMap: true
        },
        files: {
          'app.js': '<%= globalConfig.app_js %>',
          'lib.js':  '<%= globalConfig.lib_js %>'
        }
      }
    },
    sass: {
      dist: {
        files: [
          { // compile to project css folder
            expand: true,
            cwd: '<%= globalConfig.project_path %>/<%= globalConfig.scss_folder %>',
            src: '<%= globalConfig.watch_scss %>',
            dest: '<%= globalConfig.project_path %>/<%= globalConfig.css_folder %>',
            ext: '.css'
          },
          { // compile and copy over to sitecore folder
            expand: true,
            cwd: '<%= globalConfig.project_path%>/<%= globalConfig.scss_folder %>',
            src: '<%= globalConfig.watch_scss%>',
            dest: '<%= globalConfig.sitecore_path%>/<%= globalConfig.css_folder %>',
            ext: '.css'
          }
        ],
        options: {
          quiet: true
        }
      }
    },
    cssmetrics: {
      dev: {
        src: ['<%= globalConfig.project_path%>/<%= globalConfig.css_folder %>/*.css']
      }
    },
    sync: {
      main: {
        files: [
          {
            expand: true,
            cwd: '<%= globalConfig.project_path%>/',
            src: ['**/*.ascx', '**/*.aspx'],
            dest: '<%= globalConfig.sitecore_path%>/'
          }
        ]
      }
    },
    docco: {
      debug: {
        src: ['<%= globalConfig.jsdocs_folder %>/*.coffee'],
        options: {
          output: '<%= globalConfig.jsdocs_folder_output %>/'
        }
      }
    },
    watch: {
      coffee: {
        files: '<%= globalConfig.watch_coffee%>',
        tasks: ['default']
      },
      sass: {
        files: '<%= globalConfig.project_path%>/<%= globalConfig.scss_folder %>/**/*.scss',
        tasks: ['sass:dist'],
        options: {
          livereload: true
        }
      },
      sync: {
        files: [
          '<%= globalConfig.project_path%>/**/*.ascx',
          '<%= globalConfig.project_path%>/**/*.aspx'
        ],
        tasks: ['sync:main'],
        options: {
          livereload: true
        }
      }
    },
    grunticon: {
      all: {
        files: [
          {
            expand: true,
            cwd: '<%= globalConfig.project_path%>/<%= globalConfig.img_folder %>',
            src: ['*.svg'],
            dest: '<%= globalConfig.project_path%>/<%= globalConfig.img_folder %>'
          }
        ],
        options: {
          pngfolder: "_ie"
        }
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: '<%= globalConfig.project_path%>/<%= globalConfig.css_folder %>/',
        src: ['*.css'],
        dest: '<%= globalConfig.project_path%>/<%= globalConfig.css_folder %>/',
        ext: '.min.css'
      }
    }
  });

  // Load plugins
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // Default task(s)
  grunt.registerTask('default', ['newer:coffee', 'newer:sass', 'newer:copy', 'newer:docco']);
};
