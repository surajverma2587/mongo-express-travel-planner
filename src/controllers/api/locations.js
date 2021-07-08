const { Location } = require("../../models");

const getLocations = async (req, res) => {
  const locations = await Location.find({});
  res.json(locations);
};

module.exports = {
  getLocations,
};
