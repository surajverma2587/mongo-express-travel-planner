const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const planSchema = {
  title: {
    type: String,
    required: true,
  },
  locations: [
    {
      type: Schema.Types.ObjectId,
      ref: "Location",
    },
  ],
};

const PlanSchema = new Schema(planSchema);

const Plan = mongoose.model("Plans", PlanSchema);

module.exports = Plan;
