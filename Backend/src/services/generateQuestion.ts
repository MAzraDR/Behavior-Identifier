import { templates, situations, questionTypes } from "../config/questions.js";

type Relationship = "family" | "partner" | "friend" | "stranger";
type Place = "workplace" | "school" | "public" | "home" | "social";
type Situation = "joyous" | "neutral" | "sadness" | "depressed";

function random<T>(arr: T[]): T {
	if (arr.length === 0) {
		throw new Error("Array cannot be empty");
	}

	return arr[Math.floor(Math.random() * arr.length)]!;
}

export function generateQuestion({
	relationship,
	place,
	situation,
}: {
	relationship: Relationship;
	place: Place;
	situation: Situation;
}) {
	const base = random([...templates[place]]);
	const emotion = random([...situations[situation]]);

	const scenario = `${base.replace(
		"{relationship}",
		relationship
	)} ${emotion}`;

	const shuffled = [...questionTypes].sort(() => 0.5 - Math.random());
	const selected = shuffled.slice(0, 5);

	return {
		scenario,
		question: selected.map((q, index) => ({
			id: index + 1,
			question: q.question,
			options: q.options,
		})),
	};
}
