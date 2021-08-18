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

router.get("/:id", async (req, res) => {
  try {
    const location = await Location.getLocationById(req.params.id);
    res.status(200).json({ message: "got location", loc: location });
  } catch (e) {
    res.status(500).json({ message: "could not get location", error: e });
  }
});
