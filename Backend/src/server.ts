import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import quizRoutes from "./routes/quizRoutes.js";

dotenv.config();
dotenv.config({ path: `.env.development`, override: true });

const app = express();

// Change CORS when in prod
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/quiz", quizRoutes);

const startServer = async () => {
	try {
		const port = Number(process.env.PORT || 3000);
		app.listen(port, "0.0.0.0", () =>
			console.log(`Server is running on port ${port}`)
		);
	} catch (err: any) {
		console.error("Failed to start server:", err.message);
		process.exit(1);
	}
};

startServer();
