const Router = require("express");
const createPolls = require("../handlers/create-polls");
const createVotes = require("../handlers/create-votes");
const getPoll = require("../handlers/get-polls");
const createPollsValidator = require("../validators/create-polls");
const createVotesValidator = require("../validators/create-votes");

module.exports = (app, db) => {
  const router = new Router();
  router.get("/", function (req, res, next) {
    res.send("Backend is working fine !!!");
  });
  router.post("/polls", createPollsValidator, createPolls(db));
  router.put("/polls/:poll", createVotesValidator, createVotes(db));
  router.get("/polls/:poll", getPoll(db));
  app.use(router);
};
