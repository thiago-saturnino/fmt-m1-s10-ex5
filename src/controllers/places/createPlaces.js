const Place = require("../../models/places");

async function createPlaces(req, res) {
  try {
    const place = {
      name: req.body.name,

      numberPhone: req.body.numberPhone,

      openingHours: req.body.openingHours,

      description: req.body.description,

      latitude: req.body.latitude,

      longitude: req.body.longitude,
    };

    const newPlace = await Place.create(place);

    res.status(201).json(newPlace);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = createPlaces;
