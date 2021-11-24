const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const app = require("./app");
const mongoose = require("mongoose");
const startElarian = require("./controllers/connectionController");

process.on("uncaughtException", (err) => {
  console.log("Unexpected exception 🔥 shutting down ....");
  console.log(err.name, err.message);
  console.log(err.stack);
  process.exit(1);
});

const db = process.env.LOCAL_DATABASE;
const port = process.env.PORT;

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to the database successfully"));

const server = app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

startElarian.start();

process.on("unhandledRejection", (err) => {
  console.log("Unhandled rejection 🔥 shutting down....");
  console.log(err.name, err.message);
  console.log(err.stack);
  server.close(() => {
    process.exit(1);
  });
});
