export const templates = {
	workplace: [
		"You are at work with your {relationship}.",
		"You're in a workplace situation involving your {relationship}.",
	],
	school: [
		"You are at school with your {relationship}.",
		"A situation happens at school involving your {relationship}.",
	],
	public: [
		"You are in a public space with your {relationship}.",
		"Something happens outside with your {relationship}.",
	],
	home: [
		"You are at home with your {relationship}.",
		"A situation unfolds at home with your {relationship}.",
	],
	social: ["You are interacting online with a {relationship}."],
} as const;

export const situations = {
	joyous: [
		"Everyone is having fun and enjoying the moment.",
		"The atmosphere is positive and exciting.",
	],
	neutral: ["Nothing special is happening.", "It's a normal situation."],
	sadness: [
		"Someone seems upset and emotional.",
		"The mood suddenly becomes heavy.",
	],
	depressed: [
		"The person looks completely drained and hopeless.",
		"It's a very serious emotional situation.",
	],
} as const;

export const questionTypes = [
	{
		id: 1,
		question: "You notice this situation happening. What do you do first?",
		options: {
			A: "Avoid getting involved",
			B: "Observe calmly",
			C: "Step in immediately",
			D: "Do something unexpected",
		},
	},
	{
		id: 2,
		question: "How do you feel internally about it?",
		options: {
			A: "Uncomfortable, so you distance yourself",
			B: "Stable and composed",
			C: "Annoyed or triggered",
			D: "Chaotic or impulsive",
		},
	},
	{
		id: 3,
		question: "Now you have to decide what to do. What’s your approach?",
		options: {
			A: "Still avoid it",
			B: "Handle it appropriately",
			C: "Take control of the situation",
			D: "Act unpredictably",
		},
	},
	{
		id: 4,
		question: "You act on your decision. What happens?",
		options: {
			A: "You stay out of it completely",
			B: "You manage it well",
			C: "You escalate things",
			D: "You make things chaotic",
		},
	},
	{
		id: 5,
		question: "Looking back, how did your actions affect the situation?",
		options: {
			A: "Nothing changed",
			B: "Things stayed stable",
			C: "Things got more tense",
			D: "Everything became a mess",
		},
	},
];
