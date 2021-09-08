const router = require("express").Router();
const stats = require("./playerStats-model");

router.get("/", (req, res) => {
  stats
    .allStats()
    .then((allStats) => {
      res.status(200).json({ message: "all stats", stats: allStats });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "could not get all stats" });
    });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  stats
    .playerStats(id)
    .then((stats) => {
      res.status.json({ message: "got stats by id", playerStats: stats });
    })
    .catch((error) => {
      res.status(500).json({ message: "could not get stats", e: error });
    });
});
