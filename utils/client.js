const { Elarian } = require("elarian");

const client = new Elarian({
  apiKey: process.env.API_KEY,
  orgId: process.env.ORG_ID,
  appId: process.env.APP_ID,
});

module.exports = client;
