const db = require("../../database/config");

module.exports = {
  addPlayer,
  findPlayer,
  deleteplayer,
  findBy,
  playerUpdate,
};

function findPlayer() {
  return db("player").select("id", "playerName");
}

function addPlayer(user) {
  return db("player")
    .insert(user, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function findById(id) {
  return db("player").where({ id }).first();
}

function deleteplayer(id) {
  return findById(id).del(id);
}

function findBy(filter) {
  return db("player").where(filter);
}

function playerUpdate(id, newInfo) {
  return db("player").where({ id }).update({ newInfo });
}
