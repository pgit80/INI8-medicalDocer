import multer from "multer";
import fs from "fs";
import path from "path";

// Ensure uploads folder exists
const uploadFolder = "uploads";
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
  console.log("uploads/ folder created automatically");
}

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  }
});

// PDF-only filter (case-insensitive)
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();

  if (ext !== ".pdf") {
    return cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE", "Only PDF files allowed"));
  }

  cb(null, true);
};

// Final multer instance
export const upload = multer({
  storage,
  fileFilter
});
