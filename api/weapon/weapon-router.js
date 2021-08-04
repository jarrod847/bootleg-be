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

router.post("/add", async (req, res) => {
  try {
    const newWeapon = await Weapon.addWeapon(req.body);
    res.status(200).json({ message: "you have created a weapon", wpn: weapon });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "could not create a new weapon", error: e });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedWpn = await Weapon.deleteWeapon(req.params.id);
    res.status(200).json({ message: "weapon was deleted", wpn: deletedWpn });
  } catch (e) {
    res.status.json({ message: "could not delete weapon", error: e });
  }
});

module.exports = router;
