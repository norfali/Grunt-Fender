// *************************************************
// INIT CONFIG SETTINGS
// Project specific settings
// *************************************************

var jslib_folder = 'project'; // Javascript lib folder
var scss_folder = 'scss'; // CSS folder
var css_folder = 'css'; // CSS folder
var img_folder = 'images'; // Images folder
var js_folder = 'js'; // JS folder
var project_path = "D:/TFS2012/Hello World/Foo.HelloWorld.Website"; // Full project path (do not include "/" end of path)
var sitecore_path = "C:/Sitecore/HelloWorld/Website"; // Full Sitecore path (do not include "/" end of path)
var watch_scss = ['style.scss', 'normalize.scss', 'print.scss', 'ie-master.scss']; // List of SCSS files
var minify_css = ['style.css']; // List of compiled CSS files for minification (SASS' compressed was unstable)
var net_js = ['custom-net.js']; // Any NET specific JS files (e.g. custom NET validation overrides for better experience)
var watch_coffee = ['project/*.coffee', 'app.coffee', 'lib.coffee']; // List of CoffeeScript files to watch
var copy_js = ["lib.js", "app.js", net_js]; // List of compiled JS files
var app_js = ['app.coffee']; // Main app Coffee file
// List of "mini" Coffee files for concatenation (generating lib.js)
var lib_js = [
            jslib_folder + '/' + 'initfoundation.coffee',
            jslib_folder + '/' + 'general.coffee',
            jslib_folder + '/' + 'mobile.coffee',
            jslib_folder + '/' + 'language-toggler.coffee',
            jslib_folder + '/' + 'mini-basket.coffee',
            jslib_folder + '/' + 'ajax-progress.coffee',
            jslib_folder + '/' + 'lazy-pagination.coffee',
            jslib_folder + '/' + 'product-filter.coffee',
            jslib_folder + '/' + 'share.coffee',
            jslib_folder + '/' + 'newsletter-signup.coffee',
            jslib_folder + '/' + 'sync-height.coffee',
            jslib_folder + '/' + 'product-tabs.coffee',
            jslib_folder + '/' + 'search-tabs.coffee',
            jslib_folder + '/' + 'image-maps.coffee',
            jslib_folder + '/' + 'video-modal.coffee',
            jslib_folder + '/' + 'google-maps.coffee',
            jslib_folder + '/' + 'user-account.coffee',
            jslib_folder + '/' + 'same-address.coffee',
            jslib_folder + '/' + 'currency-conversion.coffee',
            jslib_folder + '/' + 'password-switch.coffee',
            jslib_folder + '/' + 'password-strength.coffee',
            jslib_folder + '/' + 'ecommerce.coffee',
            jslib_folder + '/' + 'toggle-select.coffee'
          ];

// *************************************************
// DO NOT MODIFY ANYTHING BELOW THIS LINE
// Unless you really need to...!
// *************************************************

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compile: {
        options: {
          bare: true,
          sourceMap: true
        },
        files: {
          'app.js': app_js,
          'lib.js':  lib_js
        }
      }
    },
    sass: {
      dist: {
        files: [
          { // compile to project css folder
            expand: true,
            cwd: project_path + '/' + scss_folder,
            src: watch_scss,
            dest: project_path + '/' + css_folder,
            ext: '.css'
          },
          { // compile and copy over to sitecore folder
            expand: true,
            cwd: project_path + '/' + scss_folder,
            src: watch_scss,
            dest: sitecore_path + '/' + css_folder,
            ext: '.css'
          }
        ]
      }
    },
    cssmetrics: {
      dev: {
        src: [project_path + '/' + css_folder + '/*.css']
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: project_path + "/" + js_folder + "/",
            src: copy_js,
            dest: sitecore_path + "/" + js_folder + "/",
            filter: "isFile"
          }
        ]
      }
    },
    docco: {
      debug: {
        src: [jslib_folder + '/*.coffee'],
        options: {
          output: 'docs/'
        }
      }
    },
    watch: {
      coffee: {
        files: watch_coffee,
        tasks: ['default']
      },
      sass: {
        files: project_path + '/' + scss_folder + '/**/*.scss',
        tasks: ['sass'],
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
            cwd: project_path + '/' + img_path,
            src: ['*.svg'],
            dest: project_path + '/' + img_path
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
        cwd: project_path + '/' + css_path + '/',
        src: minify_css,
        dest: project_path + '/' + css_path + '/',
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
