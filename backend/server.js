import express from "express";
import cors from "cors";
import "dotenv/config";

import path from "node:path";

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

// app config
const app = express();
const PORT = process.env.PORT || 4000; // capitalize PORT

const __dirname = path.resolve();

connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/admin", adminRouter); //localhost:4000/api/admin/add-doctor
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
});
/*
app.get("/", (req, res) => {
  res.send("API WORKING");
});*/

app.listen(PORT, () => console.log("Server is running on port: ", PORT));
