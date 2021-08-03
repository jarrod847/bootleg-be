const db = require("../../database/config");

module.exports = {
  addAttack,
  removeAttack,
  getAttackById,
  getAttacks,
};

function getAttacks() {
  return db("attacks");
}

function getAttackById(id) {
  return db("attacks").where("id", id).first();
}
