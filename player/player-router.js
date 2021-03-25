const db = require("../database/config");

module.exports = {
  addPlayer,
  findPlayer,
  deleteplayer,
};

function findPlayer() {
  return db("player").select("id", "playerName");
}

function addPlayer(user) {
  return db("player")
    .insert(user, "id")
    .then((id) => {
      return findById(id);
    });
}

function findById(id) {
  return db("player").where({ id }).first();
}
