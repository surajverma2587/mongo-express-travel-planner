const { Plan } = require("../../models");

const getPlans = async (req, res) => {
  const plans = await Plan.find({});
  res.json(plans);
};

const getPlan = (req, res) => {
  res.json({});
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
