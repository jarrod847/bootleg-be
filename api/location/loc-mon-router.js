const router = require("express").Router();
const LocMons = require("./loc-mon-model");

router.get("/", (req, res) => {
  LocMons.allLocMons()
    .then((locMons) => {
      res.status(201).json(locMons);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "could not get monsters for locations",
      });
    });
});

router.post("/add", (req, res) => {
  LocMons.addLocMons(req.body)
    .then((locMon) => {
      res.status(200).json({
        message: "successfully created monsters for location",
        locMon,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "could not create monsters for location",
        e: error,
      });
    });
});

router.get("/:id", (req, res) => {
  LocMons.findLocMonsById(req.params.id)
    .then((locMon) => {
      res
        .status(200)
        .json({ message: "successfully got monsters for location by id" });
    })
    .catch((e) => {
      res
        .status(500)
        .json({ message: "could not get monsters for location", error: e });
    });
});

router.delete("/:id", (req, res) => {
  LocMons.delLocMons(req.params.id)
    .then((locMon) => {
      res
        .status(200)
        .json({ message: "deleted location monsters", deleted: locMon });
    })
    .catch((e) => {
      res
        .status(500)
        .json({ message: "could not delete location monsters", error: e });
    });
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
