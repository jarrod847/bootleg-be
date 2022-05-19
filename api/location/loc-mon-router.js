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

module.exports = router;
