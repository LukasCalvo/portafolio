// karma.conf.cjs - Configuración de Karma para Jasmine + Coverage con Webpack
// Ejecutar con: npm test

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'src/test-setup.js',
      'src/**/*.spec.jsx',
      'src/**/*.test.jsx'
    ],

    preprocessors: {
      'src/test-setup.js': ['webpack'],
      'src/**/*.spec.jsx': ['webpack'],
      'src/**/*.test.jsx': ['webpack'],
      'src/**/*.jsx': ['coverage'],
      'src/**/*.js': ['coverage']
    },

    webpack: require('./webpack.test.config.cjs'),

    webpackMiddleware: {
      stats: 'errors-only',
      logLevel: 'error'
    },

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcov', subdir: 'lcov' },
        { type: 'text-summary' },
        { type: 'json', subdir: 'json' }
      ],
      includeAllSources: true,
      thresholds: {
        global: {
          statements: 50,
          branches: 50,
          functions: 50,
          lines: 50
        }
      }
    },

    jasmineHtmlReporter: {
      suppressAll: false
    },

    browsers: ['FirefoxHeadless'],

    customLaunchers: {
      FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-headless']
      }
    },

    port: 9876,

    logLevel: config.LOG_INFO,

    colors: true,

    autoWatch: true,

    singleRun: false,

    concurrency: Infinity,

    browserNoActivityTimeout: 30000,

    plugins: [
      'karma-jasmine',
      'karma-firefox-launcher',
      'karma-jasmine-html-reporter',
      'karma-coverage',
      'karma-webpack'
    ]
  });
};