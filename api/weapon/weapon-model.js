const db = require("../../database/config");

module.exports = {
  addWeapon,
  updateWeapon,
  deleteWeapon,
  getWeaponById,
  getAllWeapons,
};

function getAllWeapons() {
  return db("weapon");
}

function getWeaponById(id) {
  return db("weapon").where("id", id).first();
}

function addWeapon(weapon) {
  return db("weapon")
    .insert(weapon, "id")
    .then(([id]) => {
      return getWeaponById(id);
    });
}

function updateWeapon(id, changes) {
  return getWeaponById(id).update({ changes }).returning("*");
}

function deleteWeapon(id) {
  return getWeaponById(id).del();
}
