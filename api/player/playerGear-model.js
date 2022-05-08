const db = require("../../database/config");

module.exports = {
  playerGearUpdate,
};

function playerGearUpdate(id, changes) {
  return db("player_gear").where({ id }).update(changes);
}
