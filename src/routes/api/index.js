const { Router } = require("express");

const plans = require("./plans");

const router = Router();

router.use("/plans", plans);

module.exports = router;
