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

router.post("/add", async (req, res) => {
  try {
    const newLocation = await Location.addLocation(req.body);
    res
      .status(200)
      .json({ message: "you have created a location", loc: newLocation });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "could not create a new location", error: e });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedLoc = await Location.deleteLocation(req.params.id);
    res.status(200).json({ message: "location was deleted", loc: deletedLoc });
  } catch (e) {
    res.status.json({ message: "could not delete location", error: e });
  }
});

router.delete;
