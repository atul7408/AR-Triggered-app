import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import scanRoutes from "./routes/scanRoutes.js";
import swaggerUi from "swagger-ui-express";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", scanRoutes);

// Swagger Docs
const swaggerDoc = {
  openapi: "3.0.0",
  info: {
    title: "AR Campaign API",
    version: "1.0.0",
    description: "API for tracking AR campaign scans"
  },
  paths: {
    "/api/scans": {
      post: {
        summary: "Record a scan",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  timeSpent: { type: "number" },
                  location: { type: "object" }
                }
              }
            }
          }
        },
        responses: { 201: { description: "Scan recorded" } }
      }
    }
  }
};

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
