const mongoose = require("mongoose");

const { DB_URL, MONGOOSE_OPTIONS } = require("../config");
const { Location, Plan } = require("../models");
const locationsData = require("./locations");
const plansData = require("./plans");

mongoose.connect(DB_URL, MONGOOSE_OPTIONS);

const init = async () => {
  try {
    const locations = await Location.insertMany(locationsData);
    console.log("=== Successfully seeded locations ====");

    const plan1 = {
      ...plansData[0],
      locations: [
        mongoose.Types.ObjectId(locations[0]._id),
        mongoose.Types.ObjectId(locations[3]._id),
      ],
    };

    const plan2 = {
      ...plansData[1],
      locations: [
        mongoose.Types.ObjectId(locations[1]._id),
        mongoose.Types.ObjectId(locations[2]._id),
      ],
    };

    const plans = await Plan.insertMany([plan1, plan2]);
    console.log("=== Successfully seeded plans ====");
  } catch (err) {
    console.log(err);
  }
};

init();
