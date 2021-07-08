const { Plan } = require("../../models");

const getPlans = async (req, res) => {
  const plans = await Plan.find({}).populate("locations");
  res.json(plans);
};

const getPlan = async (req, res) => {
  const plan = await Plan.findById(req.params.id).populate("locations");
  res.json(plan);
};

const createPlan = (req, res) => {
  res.json({});
};

const updatePlan = (req, res) => {
  res.json({});
};

const deletePlan = (req, res) => {
  res.json({});
};

module.exports = {
  getPlans,
  getPlan,
  createPlan,
  updatePlan,
  deletePlan,
};
