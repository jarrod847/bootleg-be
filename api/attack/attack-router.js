const router = require("express").Router();
const Atk = require("./attack-model");

router.get("/", async (req, res) => {
  try {
    const allAtks = await Atk.getAttacks();
    res.status(200).json({ message: "got all attacks", atk: allAtks });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "could not get attacks", error: e });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const atkId = await Atk.getAttackById(req.params.id);
    res.status(200).json({ message: "got attack", atk: atkId });
  } catch (e) {
    res.status(500).json({ message: "could not get attack", error: e });
  }
});

router.post("/add", async (req, res) => {
  try {
    const newAtk = await Atk.addAttack(req.body);
    res
      .status(200)
      .json({ message: "you have created an attack", atk: newAtk });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "could not create a new attack", error: e });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedAtk = await Atk.removeAttack(req.params.id);
    res.status(200).json({ message: "attack was deleted", atk: deletedAtk });
  } catch (e) {
    res.status.json({ message: "could not delete attack", error: e });
  }
});

module.exports = router;
