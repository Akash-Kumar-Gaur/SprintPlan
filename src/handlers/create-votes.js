const { v4 } = require("uuid");

module.exports = (db) => {
  return async (req, res) => {
    const result = await db.collection("polls").updateOne(
      {
        _id: req.params.poll,
        "series.entryValue": req.body.entryValue,
      },
      {
        $inc: {
          "series.$.count": 1,
        },
      }
    );

    return res.json({
      message: "Vote has been registered.",
    });
  };
};
