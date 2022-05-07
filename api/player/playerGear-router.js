const router = require("express").Router();
const PlayerGear = require("./playerGear-model");

router.put("/:id", async (req, res) => {
  try {
    const gear = await PlayerGear.playerGearUpdate(req.params.id, req.body);
    res.status(200).json({ message: "updated armor", playerGear: gear });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "could not update player gear", error: e });
  }
});

module.exports = router;
