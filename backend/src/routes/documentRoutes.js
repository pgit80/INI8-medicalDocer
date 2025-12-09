import express from "express";
import { upload } from "../middleware/upload.js";
import {
  uploadDocument,
  getDocuments,
  downloadDocument,
  deleteDocument
} from "../controllers/documentController.js";

const router = express.Router();

// TEST ROUTE
router.get("/test", (req, res) => {
  res.send("Route working");
});

// UPLOAD PDF
router.post(
  "/upload",
  upload.single("pdf"),
  (req, res, next) => {
    console.log("File received?", req.file);
    next();
  },
  uploadDocument
);

// GET ALL DOCUMENTS
router.get("/", getDocuments);

// DOWNLOAD DOCUMENT
router.get("/:id", downloadDocument);

// DELETE DOCUMENT
router.delete("/:id", deleteDocument);

export default router;
