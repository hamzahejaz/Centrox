const express = require("express");
const router = express.Router();

const GetRoutes = require("../Controller/Controller");

router.get("/Estate", GetRoutes.func);
router.post("/entry", GetRoutes.add);
module.exports = router;