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
