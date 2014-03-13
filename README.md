Grunt-Fender - v0.2.0
=====================

> Grunt to simplify front-end development workflow for Sitecore projects

## Getting Started
Requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

### Install

Download and add to your project. Open Gruntfile.js, edit the config, <code>npm install</code>, and away you go!

## Example Config

```js
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
            jslib_folder + '/' + 'language-toggler.coffee'
          ];
```

## Usage

Simply type <code>grunt watch</code> during production, however there a few tasks you may run directly on adhoc basis for example:
* <code>grunt grunticon</code>: Creates PNG version of SVG images
* <code>grunt cssmetrics</code>: See how big your compiled CSS files are
* <code>grunt cssmin</code>: Minify compiled CSS files (files are named to *.min.css)

## Current tasks

* [load-grunt-tasks](https://www.npmjs.org/package/load-grunt-tasks)
* [grunt-contrib-coffee](https://www.npmjs.org/package/grunt-contrib-coffee)
* [grunt-contrib-watch](https://www.npmjs.org/package/grunt-contrib-watch)
* [grunt-contrib-copy](https://www.npmjs.org/package/grunt-contrib-copy)
* [grunt-docco](https://www.npmjs.org/package/grunt-docco)
* [grunt-contrib-sass](https://www.npmjs.org/package/grunt-contrib-sass)
* [grunt-css-metrics](https://www.npmjs.org/package/grunt-css-metrics)
* [grunt-svg2png](https://www.npmjs.org/package/grunt-svg2png)
* [grunt-contrib-cssmin](https://www.npmjs.org/package/grunt-contrib-cssmin)
* [grunt-newer](https://www.npmjs.org/package/grunt-newer)
* [time-grunt](https://www.npmjs.org/package/time-grunt)

## Next stages

* Watch ASP.NET files for quick publish (integrate with newer grunt)
* Add growl support for notification
* SVG optimisation

## Thanks

* Authors of Grunt plugins mentioned above
* [NodeJS](http://nodejs.org/)
* [Grunt](http://gruntjs.com/)

## Legal

Feel free to use, modify, etc but this is still under development, so use at your own risk. :)

Unless required by applicable law or agreed to in writing, this work is published on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
