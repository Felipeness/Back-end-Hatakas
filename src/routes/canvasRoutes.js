import { Router } from "express";
const router = Router();
import {
  saveConfig,
  saveCanvas,
  loadCanvas,
} from "../controllers/canvasController";

router.post("/config", saveConfig);
router.post("/save", saveCanvas);
router.get("/load/:id", loadCanvas);

export default router;
