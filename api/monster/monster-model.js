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

function addMonster(monster) {
  return db("monster")
    .insert(monster, "id")
    .then(([id]) => {
      return getMonsterById(id);
    });
}

function updateMonster(id, changes) {
  return getMonsterById(id).update({ changes }).returning("*");
}

function deleteMonster(id) {
  return getMonsterById(id).del();
}
