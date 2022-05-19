const db = require("../database/config");

module.exports = {
  allLocMons,
  findLocMonsById,
};

function allLocMons() {
  return db("location_monsters");
}

function findLocMonsById(id) {
  return db("location_monsters").where("id", id).first();
}
