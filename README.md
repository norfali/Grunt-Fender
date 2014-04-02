Grunt-Fender - v0.2.3
=====================

> Grunt to simplify front-end development workflow for Sitecore projects

## Getting Started
Requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

### Install

Download and add to your project. Open Gruntfile.js, edit the config, <code>npm install</code>, and away you go!

## Example Config

```js
{
  "scss_folder" : "scss",
  "css_folder" : "css",
  "img_folder" : "images",
  "js_folder" : "js",
  "project_path" : "D:/TFS2012/Hello World/Foo.HelloWorld.Website",
  "sitecore_path" : "C:/Sitecore/HelloWorld/Website",
  "watch_scss" : [
    "style.scss", 
    "normalize.scss", 
    "print.scss", 
    "ie-master.scss"
  ],
  "watch_coffee" : [
    "project/*.coffee", 
    "app.coffee", 
    "lib.coffee"
  ],
  "copy_js" : [
    "lib.js", 
    "app.js",
    "custom-net.js"
  ],
  "app_js" : [
    "app.coffee"
  ],
  "jsdocs_folder" : "project",
  "jsdocs_folder_output" : "docs",
  "lib_js" : [
    "project/initfoundation.coffee",
    "project/general.coffee",
    "project/mobile.coffee",
    "project/language-toggler.coffee"
  ]
}
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
* [grunt-sync](https://npmjs.org/package/grunt-sync)
* [grunt-docco](https://www.npmjs.org/package/grunt-docco)
* [grunt-contrib-sass](https://www.npmjs.org/package/grunt-contrib-sass)
* [grunt-css-metrics](https://www.npmjs.org/package/grunt-css-metrics)
* [grunt-svg2png](https://www.npmjs.org/package/grunt-svg2png)
* [grunt-contrib-cssmin](https://www.npmjs.org/package/grunt-contrib-cssmin)
* [grunt-newer](https://www.npmjs.org/package/grunt-newer)
* [time-grunt](https://www.npmjs.org/package/time-grunt)

## Release History

* 0.2.2: Replaced grunt-contrib-copy with grunt-sync for better ASPX/ASCX watching & copying
* 0.2.1: Removed config options from Gruntfile.js
* 0.2.0: Initial release

## Next stages

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
