const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //HTML reports:
  reporter: 'cypress-mochawesome-reporter',
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    //base URL
    baseUrl: 'https://www.automationexercise.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
