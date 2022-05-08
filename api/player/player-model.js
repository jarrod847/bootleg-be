const db = require("../../database/config");

module.exports = {
  addPlayer,
  findPlayer,
  deleteplayer,
  findBy,
  playerUpdate,
  playerAndStatsById,
  addPlayerGear,
  playerGearByPlayerId,
  allPlayerGear,
};

function findPlayer() {
  return db("player").select("id", "playerName");
}

function playerAndStatsById(id) {
  return db("player")
    .join("player_stats as s", "player.id", "s.player_id")
    .where("player.id", id)
    .first()
    .select(
      "player.playerName",
      "player.id",
      "player.online",
      "s.Hp",
      "s.Mp",
      "s.Vig",
      "s.Lvl",
      "s.Str",
      "s.Dex",
      "s.Int",
      "s.Location",
      "s.Xp",
      "s.stat_points",
      "s.total_hp"
    );
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

function playerGearByPlayerId(player_id) {
  return db("player_gear").where("player_id", player_id).first();
}

function addPlayerGear(id) {
  return db("player_gear")
    .insert({ player_id: id }, "id")
    .then(() => {
      return playerGearByPlayerId(id);
    });
}

function allPlayerGear() {
  return db("player_gear");
}
