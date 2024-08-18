const express = require("express");
const router = express.Router();
const canvasController = require("../controllers/canvasController");

router.post("/config", canvasController.saveConfig);
router.post("/save", canvasController.saveCanvas);
router.get("/load/:id", canvasController.loadCanvas);

module.exports = router;
