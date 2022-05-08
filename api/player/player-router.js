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
          Player.addPlayerGear(newUser.id)
            .then((player_gear) => {
              res.status(200).json({
                message: "created player with stats and gear",
                player: user,
                stats: userStats,
                gear: player_gear,
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

router.post("/addGear", async (req, res) => {
  const plyId = req.body.player_id;
  try {
    console.log("player id", plyId);
    const plyGear = await Player.addPlayerGear(req.body.player_id);
    res
      .status(200)
      .json({ message: "added player gear to database", gear: plyGear });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "could not add player gear to database", error: e });
  }
});

router.get("/gear/:id", async (req, res) => {
  try {
    const plyGear = await Player.playerGearByPlayerId(req.params.id);
    res.status(200).json({ message: "got player gear", gear: plyGear });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "could not get player gear", error: e });
  }
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

router.get("/gear/", async (req, res) => {
  try {
    const allPlayerGear = await Player.allPlayerGear();
    res
      .status(200)
      .json({ message: "got all player gear", gear: allPlayerGear });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "could not get all players gear", error: e });
  }
});

router.post("/login", (req, res) => {
  let { playerName, password } = req.body;
  Player.findBy({ playerName })
    .first()
    .then((user) => {
      Player.playerAndStatsById(user.id)
        .then((plyInfo) => {
          Player.playerGearByPlayerId(user.id)
            .then((gear) => {
              res
                .status(200)
                .json({ message: "login successful", ply: plyInfo });
            })
            .catch((error) => {
              console.log(error);
              res.status(500).json({ message: "Could not get player gear" });
            });
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
