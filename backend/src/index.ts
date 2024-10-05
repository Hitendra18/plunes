import express, { Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";

import {
  errorResponserHandler,
  invalidPathHandler,
} from "./middlewares/errorHandler";
import userRoutes from "./routes/user";
import connectDB from "./db";

// configure environment variables
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

// Connect to database
connectDB();

// middlewares
app.use(
  cors({
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Authorization"],
  }),
);
app.use(express.json());

// Welcome route
app.get("/", (_, res: Response) => {
  res.send("Welcome to Plunes Healthcare backend API!!!");
});

// user routes
app.use("/api/users", userRoutes);

// Handle errors
app.use(invalidPathHandler);
app.use(errorResponserHandler);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
