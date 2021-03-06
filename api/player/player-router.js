const router = require("express").Router();
const Player = require("./player-model");
const Stats = require("./playerStats-model");

router.post("/register", (req, res) => {
  let user = req.body;
  console.log("message", user);

  Player.addPlayer(user)
    .then((newUser) => {
      Stats.addStats(newUser.id)
        .then((userStats) => {
          res.status(200).json({
            message: "created player with stats",
            player: user,
            stats: userStats,
          });
        })
        .catch((error) => {
          console.log(error);
          res
            .status(500)
            .json({ message: "could not create stats for the player" });
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "can not register" });
    });
});

router.get("/", (req, res) => {
  Player.findPlayer()
    .then((player) => {
      res.json(player);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ message: "could not get users" });
    });
});

router.post("/login", (req, res) => {
  let { playerName, password } = req.body;
  Player.findBy({ playerName })
    .first()
    .then((user) => {
      Player.playerAndStatsById(user.id)
        .then((plyInfo) => {
          res.status(200).json({ message: "login successful", ply: plyInfo });
        })
        .catch((error) => {
          console.log(error);
          res.stats(500).json({ message: "could not get player stats" });
        });
    })
    .catch((err) => {
      console.log("wrong");
      res.status(500).json(err);
    });
});

module.exports = router;
