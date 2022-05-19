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

module.exports = router;
