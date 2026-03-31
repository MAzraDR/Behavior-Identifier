import type { Request, Response } from "express";
import { generateQuestion } from "../services/generateQuestion.js"; 
import { getFinalResult } from "../services/calculateResult.js"; 

type Answer = "A" | "B" | "C" | "D";
type Situation = "joyous" | "neutral" | "sadness" | "depressed";
type Relationship = "stranger" | "friend" | "partner" | "family";
type Place = "workplace" | "school" | "public" | "home" | "social";

const validAnswers = ["A", "B", "C", "D"];
const validSituations = ["joyous", "neutral", "sadness", "depressed"];
const validRelationships = ["stranger", "friend", "partner", "family"];
const validPlaces = ["workplace", "school", "public", "home", "social"];

// 🎮 1. Generate Scenario + Questions
export function generateQuiz(req: Request, res: Response) {
	try {
		const { relationship, place, situation } = req.body;

		// ✅ Validation
		if (
			!validRelationships.includes(relationship) ||
			!validPlaces.includes(place) ||
			!validSituations.includes(situation)
		) {
			return res.status(400).json({ message: "Invalid input" });
		}

		const data = generateQuestion({
			relationship,
			place,
			situation,
		});

		return res.json(data);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Server error" });
	}
}

// 🧮 2. Submit Answers → Calculate Result
export function submitQuiz(req: Request, res: Response) {
	try {
		const { answers, situation, relationship } = req.body;

		// ✅ Basic validation
		if (
			!Array.isArray(answers) ||
			!validSituations.includes(situation) ||
			!validRelationships.includes(relationship)
		) {
			return res.status(400).json({ message: "Invalid input" });
		}

		// ✅ Validate each answer
		for (const a of answers) {
			if (!validAnswers.includes(a)) {
				return res
					.status(400)
					.json({ message: "Invalid answer detected" });
			}
		}

		const result = getFinalResult(
			answers as Answer[],
			situation as Situation,
			relationship as Relationship
		);

		return res.json(result);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Server error" });
	}
}
