const { Router } = require("express");

const plans = require("./plans");
const locations = require("./locations");

const router = Router();

router.use("/plans", plans);
router.use("/locations", locations);

module.exports = router;
