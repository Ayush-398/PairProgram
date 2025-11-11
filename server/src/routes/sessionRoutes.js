import express from "express";
import { requireAuth } from "@clerk/express";

import {
  createSession,
  endSession,
  getActiveSessions,
  getMyRecentSessions,
  getSessionById,
  joinSession,
} from "../controllers/sessionController.js";

const router = express.Router();

router.post("/", requireAuth(), createSession);
router.get("/active", requireAuth(), getActiveSessions);
router.get("/my-recent", requireAuth(), getMyRecentSessions);

router.get("/:id", requireAuth(), getSessionById);
router.post("/:id/join", requireAuth(), joinSession);
router.post("/:id/end", requireAuth(), endSession);

export default router;