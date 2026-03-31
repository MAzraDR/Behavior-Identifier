import express from "express";
import { generateQuiz, submitQuiz } from "../controller/quizController.js";

const router = express.Router();

router.post("/generate", generateQuiz);
router.post("/submit", submitQuiz);

export default router;
