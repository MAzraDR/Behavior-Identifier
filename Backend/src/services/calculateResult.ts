import {
	behaviorScore,
	situationMultiplier,
	relationshipWeight,
	type Answer,
	type Situation,
	type Relationship,
} from "../config/scoring.js";

export function calculateBatchScore(
	answers: Answer[],
	situation: Situation,
	relationship: Relationship
) {
	return answers.reduce((total, answer) => {
		const base = behaviorScore[answer];
		const situationMulti = situationMultiplier[situation][answer];
		const relationWeight = relationshipWeight[relationship];

		return total + base * situationMulti * relationWeight;
	}, 0);
}
export function getResult(score: number) {
	if (score <= 10) return "Low";
	if (score <= 25) return "Medium";
	return "High";
}

export function getDominantBehavior(answers: Answer[]) {
	const count = { A: 0, B: 0, C: 0, D: 0 };

	answers.forEach((a) => count[a]++);

	const sortedEntries = Object.entries(count).sort((a, b) => b[1] - a[1]);

	if (sortedEntries[0] == undefined) return;

	return sortedEntries.length > 0 ? sortedEntries[0][0] : null;
}

export function getFinalResult(
	answers: Answer[],
	situation: Situation,
	relationship: Relationship
) {
	const score = calculateBatchScore(answers, situation, relationship);
	const level = getResult(score);
	const dominant = getDominantBehavior(answers);

	return {
		score,
		level,
		dominant,
	};
}
