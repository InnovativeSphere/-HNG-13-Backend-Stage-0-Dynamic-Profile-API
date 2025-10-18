import axios from "axios";
import userModel from "../models/userModel.js";

export const getUserProfile = async (req, res) => {
  try {
    // API call to Fetch cat fact from external API
    const response = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });
    const catFact = response.data.fact || "Cats are mysterious creatures!";

    // Build and send response
    res.status(200).json({
      status: "success",
      user: userModel,
      timestamp: new Date().toISOString(),
      fact: catFact,
    });
  } catch (error) {
    console.error("Cat Fact API Error:", error.message);

    res.status(200).json({
      status: "success",
      user: userModel,
      timestamp: new Date().toISOString(),
      fact: "Could not fetch a cat fact right now 🐾",
    });
  }
};
