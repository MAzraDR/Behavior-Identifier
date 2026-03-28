export const baseScore = {
	passive: 1,
	normal: 0,
	aggressive: 2,
	chaotic: 3,
};

export const multiplier = {
	joyous: {
		passive: 0.5,
		normal: 0,
		aggressive: 1.5,
		chaotic: 2,
	},
	neutral: {
		passive: 1,
		normal: 0,
		aggressive: 2,
		chaotic: 2.5,
	},
	sadness: {
		passive: 1.5,
		normal: 0,
		aggressive: 2.5,
		chaotic: 3,
	},
	depressed: {
		passive: 2,
		normal: 0,
		aggressive: 3,
		chaotic: 4,
	},
};

export const relationshipWeight = {
	stranger: 1,
	friend: 1.2,
	partner: 1.5,
	family: 1.5,
};
