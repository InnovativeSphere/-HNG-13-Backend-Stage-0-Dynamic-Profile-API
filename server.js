import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use("/me", userRoutes);

app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Endpoint not found" });
});

// Start server on single port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
