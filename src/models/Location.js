const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const locationSchema = {
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
};

const LocationSchema = new Schema(locationSchema);

const Location = mongoose.model("Location", LocationSchema);

module.exports = Location;
