const { Router } = require("express");

const { getLocations } = require("../../controllers/api/locations");

const router = Router();

router.get("/", getLocations);

module.exports = router;
