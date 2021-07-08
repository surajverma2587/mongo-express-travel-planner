const { Plan } = require("../../models");

const getPlans = async (req, res) => {
  const plans = await Plan.find({}).populate("locations");
  res.json(plans);
};

const getPlan = async (req, res) => {
  const { id } = req.params;

  const plan = await Plan.findById(id).populate("locations");
  res.json(plan);
};

const createPlan = async (req, res) => {
  const { title, locations } = req.body;

  const plan = {
    title,
    locations,
  };

  const data = await Plan.create(plan).populate("locations");

  res.json(data);
};

const updatePlan = async (req, res) => {
  const { title, locations } = req.body;
  const { id } = req.params;

  const plan = {
    title,
    locations,
  };

  const data = await Plan.findOneAndUpdate({ _id: id }, plan, {
    new: true,
  }).populate("locations");

  res.json(data);
};

const deletePlan = async (req, res) => {
  const { id } = req.params;

  const data = await Plan.findOneAndDelete({ _id: id }).populate("locations");

  res.json(data);
};

module.exports = {
  getPlans,
  getPlan,
  createPlan,
  updatePlan,
  deletePlan,
};
