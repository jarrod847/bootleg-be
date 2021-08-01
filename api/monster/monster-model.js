const db = require("../../database/config");

module.exports = {
  addMonster,
  updateMonster,
  deleteMonster,
  getMonsterById,
  getAllMonsters,
};

function getAllMonsters() {
  return db("monster");
}

function getMonsterById(id) {
  return db("monster").where("id", id).first();
}
