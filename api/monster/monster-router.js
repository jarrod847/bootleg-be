const router = require("express").Router();
const Monster = require("./monster-model");

router.get("/", async (req, res) => {
  try {
    const allMonsters = await Monster.getAllMonsters();
    res
      .status(200)
      .json({ message: "got all monsters", monsters: allMonsters });
  } catch (e) {
    res.status(500).json({ message: "could not get monsters", error: e });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const monster = await Monster.getMonsterById(req.params.id);
    res.status(200).json({ message: "got monster", mon: monster });
  } catch (e) {
    res.status(500).json({ message: "could not get monster", error: e });
  }
});

router.post("/add", async (req, res) => {
  try {
    const newMonster = await Monster.addMonster(req.body);
    res
      .status(200)
      .json({ message: "you have created a monster", monster: newMonster });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "could not create a new monster", error: e });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedMon = await Monster.deleteMonster(req.params.id);
    res
      .status(200)
      .json({ message: "monster was deleted", monster: deletedMon });
  } catch (e) {
    res.status.json({ message: "could not delete monster", error: e });
  }
});
module.exports = router;
