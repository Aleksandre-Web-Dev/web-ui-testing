export const config = {
  runner: "local",
  specs: ["./project/test/specs/**/*.js"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--incognito", "headless", "disable-gpu"],
      },
    },
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "http://the-internet.herokuapp.com/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver"],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
