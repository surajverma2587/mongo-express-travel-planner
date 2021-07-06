const { Router } = require("express");

const {
  getPlans,
  getPlan,
  createPlan,
  updatePlan,
  deletePlan,
} = require("../../controllers/api/plans");

const router = Router();

router.get("/", getPlans);

router.get("/:id", getPlan);

router.post("/", createPlan);

router.put("/:id", updatePlan);

router.delete("/:id", deletePlan);

module.exports = router;
