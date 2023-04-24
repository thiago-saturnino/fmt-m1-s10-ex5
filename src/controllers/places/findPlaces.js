const Place = require("../../models/places");

async function findPlaces(req, res) {
  try {
    const places = await Place.findAll();
    return res.json(places);
  } catch (error) {
    res.status(500).json({ message: "Não há dados" });
  }
}

module.exports = findPlaces;
