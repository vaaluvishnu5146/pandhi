const express = require("express");
const ENV = require("dotenv");
const APP_SERVER = require("./app");
const NODE_SERVER = express();
const PORT = 4000;

/**
 * INJECTING ENVIRONMENT VARIABLES INTO SERVER
 */
ENV.config();
/**
 * REGISTER APP SERVER
 */
NODE_SERVER.use("/", APP_SERVER);

/**
 * START NODE_SERVER WITH PORT = 4000
 */
NODE_SERVER.listen(PORT, "localhost", () => {
  console.log("APP STARTED");
});
