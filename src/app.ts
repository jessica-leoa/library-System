import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import userRouter from "./routes/userRouter";
import libraryRouter from "./routes/libraryRouter";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", libraryRouter); 
app.use("/user", userRouter);

export default app;