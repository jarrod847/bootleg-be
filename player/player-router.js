const db = require("../database/config");

module.exports = {
  addPlayer,
  findPlayer,
  deleteplayer,
};

function findPlayer() {
  return db("player").select("id", "playerName");
}
