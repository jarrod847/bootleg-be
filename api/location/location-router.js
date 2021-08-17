const router = require("express").Router();
const Location = require("./location-model");

router.get("/", async (req, res) => {
  try {
    const getLocations = await Location.getAllLocations();
    res.status(200).json({ message: "got all locations", loc: getLocations });
  } catch (e) {
    res.status(500).json({ message: "could not get the locations" });
  }
});
