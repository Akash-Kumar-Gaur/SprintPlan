const Express = require("express");
const setupRouter = require("./setup/router");
const setupMiddleware = require("./setup/middleware");
const setupDatabase = require("./setup/database");
const Config = require("./config");

const app = Express();

setupMiddleware(app);

async function startApp() {
  const db = await setupDatabase();
  setupRouter(app, db);
  app.listen(Config.port, () => {
    console.log("Server started at port", Config.port);
  });
}

startApp().catch(console.error);
