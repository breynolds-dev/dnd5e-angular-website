//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/app.js',
      'app/components/**/*.spec.js',
      'app/components/**/*.js',
      'app/services/**/*.spec.js',
      'app/services/**/*.js',
      'app/home/**/*.spec.js',
      'app/home/**/*.js',
      'app/docs/**/*.spec.js',
      'app/docs/**/*.js',
      'app/view*/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-junit-reporter',
      'karma-osx-reporter',
      'karma-browserify',
      'karma-babel-preprocessor',
      'karma-spec-reporter'
    ],

    reporters: ['spec']

  });
};
