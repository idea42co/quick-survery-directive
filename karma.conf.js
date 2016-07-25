// Karma configuration
// Generated on Wed Jul 20 2016 15:10:30 GMT-0500 (CDT)

module.exports = function(config) {



    //***************************************
    // The problem is the xml request to the template

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],

    plugins : [
        'karma-mocha',
        'karma-chai',
        'karma-phantomjs-launcher',
        'karma-ng-html2js-preprocessor'
    ],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'bower_components/jquery/dist/jquery.min.js',
      'test/**/*.js',
      'app/*.js',
      'app/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      'test-helper.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

    preprocessors: {
      "**/*.html": ["ng-html2js"]
    },

    ngHtml2JsPreprocessor: {


      moduleName: "my.templates"
    }

    
  })
}

