import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use("/", userRoutes);

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: "success", message: "Welcome to Salim's API" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
