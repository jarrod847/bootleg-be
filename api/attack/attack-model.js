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

function addAttack(attack) {
  return db("attacks")
    .insert(attack, "id")
    .then(([id]) => {
      return getAttackById(id);
    });
}

function removeAttack(id) {
  return getAttackById(id).del();
}
