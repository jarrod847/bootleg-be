const db = require("../../database/config");

module.exports = {
  addAttack,
  removeAttack,
  getAttackById,
  getAttacks,
};

function getAttacks() {
  return db("attack");
}

function getAttackById(id) {
  return db("attack").where("id", id).first();
}

function addAttack(attack) {
  return db("attack")
    .insert(attack, "id")
    .then(([id]) => {
      return getAttackById(id);
    });
}

function removeAttack(id) {
  return getAttackById(id).del();
}
