exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.github.com/',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    retryFailedStep: {
      enabled: true
    }
  },
  tests: './tests/**/test*.js',
  name: 'codeceptjs_workers_test'
}