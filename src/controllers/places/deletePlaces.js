const Place = require("../../models/places");

async function deletePlaces(req, res) {
  try {
    await Place.destroy({ where: { id: req.params.id } });
    res.status(204).json({ message: "Deletado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = deletePlaces;
