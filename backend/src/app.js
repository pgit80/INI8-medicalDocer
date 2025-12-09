import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import documentRoutes from "./routes/documentRoutes.js"

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("REQUEST RECEIVED:", req.method, req.url);
  next();
});

// static file serving
app.use("/uploads", express.static("uploads"));

// routes
app.use("/documents", documentRoutes);

// DB CONNECT
connectDB();
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      success: false,
      message: err.message || "Upload error"
    });
  }

  if (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }

  next();
});

app.listen(5001, () => console.log("Server running on port 5000"));
