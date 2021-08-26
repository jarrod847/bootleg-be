const db = require("../../database/config");

module.exports = {
  playerStats,
  addStats,
  allStats,
};

function playerStats(id) {
  return db("player_stats").where("player_id", id).first();
}

function addStats(id) {
  return db("player_stats")
    .insert({ player_id: id })
    .then(() => {
      return playerStats(id);
    });
}

function allStats() {
  return db("player_stats");
}
