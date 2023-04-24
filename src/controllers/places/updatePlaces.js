const Place = require("../../models/places");

async function updatePlaces(req, res) {
  try {
    const { id } = req.params;
    const {
      name,
      numberPhone,
      openingHours,
      description,
      latitude,
      longitude,
    } = req.body;

    const place = await Place.findByPk(id);

    place.name = name;
    place.numberPhone = numberPhone;
    place.openingHours = openingHours;
    place.description = description;
    place.latitude = latitude;
    place.longitude = longitude;

    const placeUpdated = await place.save();

    return res.json(placeUpdated);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}
module.exports = updatePlaces;
