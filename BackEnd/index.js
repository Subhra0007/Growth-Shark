import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import careerRoute from "./api/career.js";
import contactRoute from "./api/contact.js";
import partnersubmitRoute from "./api/partnersubmit.js";

// Load env variables
dotenv.config();

// 2️⃣ Test if env variables are loading
console.log("EMAIL_USER:", process.env.EMAIL_USER ? "Loaded ✅" : "Missing ❌");
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded ✅" : "Missing ❌");
console.log("FRONTEND_URL:", process.env.FRONTEND_URL ? "Loaded ✅" : "Missing ❌");

// Initialize Express app
const app = express();

// Determine allowed origins
const allowedOrigins = [
  process.env.FRONTEND_URL, // Production frontend
  "http://localhost:5173"   // Local development
].filter(Boolean); // Remove undefined/null

// CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"], // Explicitly allow common methods
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/contact", contactRoute);
app.use("/api/career", careerRoute);
app.use("/api/partnersubmit", partnersubmitRoute); // Use app.use for consistent routing

// Default route with health check
app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend API is running", status: "healthy" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!", details: err.message });
});

// Export for Vercel (serverless)
export default app;

// For local development only (commented out in production)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}