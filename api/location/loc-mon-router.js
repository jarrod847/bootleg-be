const router = require("express").Router();
const LocMons = require("./loc-mon-model");

router.get("/", async (req, res) => {
  try {const all = await LocMons.allLocMons()

      res.status(201).json({message: "got all location monsters", locMons: all});
} catch (e) {
  console.log(error);
  res.status(500).json({message: "could not get monsters for locations", error: error});
}
});

router.post("/add", async (req, res) => { 
  try {
    const locMon = await LocMons.addLocMons(req.body)
    res.status(200).json({message: "successfully created monsters for location", locMon,
      });
  } catch (e) {      
    res.status(500).json({message: "could not create monsters for location",e: error});
  }
});

router.get("/:id", async (req, res) => {
  try {
    const locMons = await LocMons.findLocMonsById(req.params.id);
    res
      .status(200)
      .json({ message: "successfully got monsters for location by id" });
  } catch (e) {
    res
      .status(500)
      .json({ message: "could not get monsters for location", error: e });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const locMon = await LocMons.delLocMons(req.params.id);
    res
      .status(200)
      .json({ message: "deleted location monsters", deleted: locMon });
  } catch (e) {
    res
      .status(500)
      .json({ message: "could not delete location monsters", error: e });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const locMon = await LocMons.updateLocMons(req.params.id, req.body);
    res
      .status(200)
      .json({ message: "updated location monsters", locMons: locMon });
  } catch (e) {
    res
      .status(500)
      .json({ message: "could not update location monsters", error: e });
  }
});

module.exports = router;
