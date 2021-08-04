const router = require("express").Router();
const Weapon = require("./weapon-model");

router.get("/", async (req, res) => {
  try {
    const allWeapons = await Weapon.getAllWeapons();
    res.status(200).json({ message: "got all weapons", wpn: allWeapons });
  } catch (e) {
    res.status(500).json({ message: "could not get weapons", error: e });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const weapon = await Weapon.getWeaponById(req.params.id);
    res.status(200).json({ message: "got weapon", wpn: weapon });
  } catch (e) {
    res.status(500).json({ message: "could not get weapon", error: e });
  }
});

module.exports = router;
