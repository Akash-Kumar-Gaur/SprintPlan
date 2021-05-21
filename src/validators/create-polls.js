const { validateAll } = require("indicative/validator");

module.exports = async (req, res, next) => {
  try {
    await validateAll(req.body, {
      roomName: "required",
      allCanSee: "required|boolean",
      series: "required|array|min: 5",
      "series.*": "required|string",
      isSpectator: "boolean",
    });
    return next();
  } catch (errors) {
    return res.status(422).json(errors);
  }
};
