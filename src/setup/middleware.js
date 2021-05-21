const cors = require("cors");
const bodyParser = require("body-parser");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(
    cors()
    // cors({
    //   origin: ["http://sprintplan.tech", "https://sprintplan.tech"],
    // })
  );
};
