const {defineConfig} = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://petstore.swagger.io/v2",
        specPattern: "cypress/e2e/features/*.feature",
        env: {
            allureReuseAfterSpec: true,
            allureResultsPath: "allure-results"
        },
        async setupNodeEvents(on, config) {
            await preprocessor.addCucumberPreprocessorPlugin(on, config);
            on(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin.default(config)],
                })
            );
            allureWriter(on, config);
            return config;
        }
    }
});