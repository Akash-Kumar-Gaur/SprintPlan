const { v4 } = require("uuid");

module.exports = (db) => {
  return async (req, res) => {
    const data = {
      _id: v4(),
      roomName: req.body.roomName,
      allCanSee: req.body.allCanSee,
      series: req.body.series.map((entry) => ({
        entryValue: entry,
        count: 0,
      })),
      isSpectator: req.body.isSpectator,
    };

    await db.collection("polls").insertOne(data);
    return res.json({
      message: "Poll Created !!!",
      roomId: data._id,
    });
  };
};
