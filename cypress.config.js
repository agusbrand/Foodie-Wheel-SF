const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: false,
    specPattern: "src/tests/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
});
