const { v4 } = require("uuid");

module.exports = (db) => {
  return async (req, res) => {
    const poll = await db.collection("polls").findOne({
      _id: req.params.poll,
    });
    return res.json(poll);
  };
};
