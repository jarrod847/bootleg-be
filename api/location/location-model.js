const db = require("../../database/config");

module.exports = {
  addLocation,
  updateLocation,
  deleteLocation,
  getLocationById,
  getAllLocations,
};

function getAllLocations() {
  return db("location");
}

function getLocationById(id) {
  return db("location").where("id", id).first();
}

function addLocation(location) {
  return db("location")
    .insert(location, "id")
    .then(([id]) => {
      return getLocationById(id);
    });
}
