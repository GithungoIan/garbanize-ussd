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
      log.info(`App is ready to process requests via ${process.env.USSD_CODE}`);
    })
    .on("ussdSession", ussdController.handleUssdSession)
    .connect();
};
