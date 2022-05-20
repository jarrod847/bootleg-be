const db = require("../../database/config");

module.exports = {
  allLocMons,
  findLocMonsById,
  addLocMons,
  delLocMons,
};

function allLocMons() {
  return db("location_monsters");
}

function findLocMonsById(id) {
  return db("location_monsters").where("id", id).first();
}

function addLocMons() {
  return db("location_monsters")
    .insert(monsters, "id")
    .then(([id]) => {
      return findLocMonsById(id);
    });
}

function delLocMons(id) {
  return findLocMonsById(id).del();
}
