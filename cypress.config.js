const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //HTML reports:
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
