export type Answer = "A" | "B" | "C" | "D";
export type Situation = "joyous" | "neutral" | "sadness" | "depressed";
export type Relationship = "stranger" | "friend" | "partner" | "family";

export const behaviorScore = {
	A: 1, // Passive
	B: 0, // Normal
	C: 2, // Aggressive
	D: 3, // Chaotic
} as const;

export const situationMultiplier = {
	joyous: {
		A: 0.5,
		B: 0,
		C: 1.5,
		D: 2,
	},
	neutral: {
		A: 1,
		B: 0,
		C: 2,
		D: 2.5,
	},
	sadness: {
		A: 1.5,
		B: 0,
		C: 2.5,
		D: 3,
	},
	depressed: {
		A: 2,
		B: 0,
		C: 3,
		D: 4,
	},
} as const;

export const relationshipWeight = {
	stranger: 1,
	friend: 1.2,
	partner: 1.5,
	family: 1.5,
} as const;
