import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";

import {
  createSession,
  endSession,
  getActiveSessions,
  getMyRecentSessions,
  getSessionById,
  joinSession,
} from "../controller/sessionController.js";

const router = express.Router();

router.post("/", protectRoute, createSession); // Use protectRoute
router.get("/active", protectRoute, getActiveSessions); // Use protectRoute
router.get("/my-recent", protectRoute, getMyRecentSessions); // Use protectRoute

router.get("/:id", protectRoute, getSessionById); // Use protectRoute
router.post("/:id/join", protectRoute, joinSession); // Use protectRoute
router.post("/:id/end", protectRoute, endSession); // Use protectRoute

export default router;