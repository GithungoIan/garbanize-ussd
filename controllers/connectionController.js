const client = require("../utils/client");
const ussdController = require("./ussdController");
const log = require("signale");

exports.start = () => {
  client
    .on("error", (err) => {
      console.error(err);
    })
    .on("connected", () => {
      log.info("App is connected to Elarian");
    })
    .on("ussdSession", ussdController.handleUssdSession)
    .connect();
};
