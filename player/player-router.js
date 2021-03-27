const router = require("express").Router();
const Player = require("./player-modal");

router.post("/register", (req, res) => {
  let user = req.body;
  console.log("message", user);

  Player.addPlayer(user)
    .then((newUser) => {
      res.status(201).json(newUser);
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
      res.status(200).json({ message: "you are logged in", user });
    })
    .catch((err) => {
      console.log("wrong");
      res.status(500).json(err);
    });
});
module.exports = router;
