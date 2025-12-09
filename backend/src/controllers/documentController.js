import Document from "../models/Document.js";
import fs from "fs";

export const uploadDocument = async (req, res) => {
  try {
    const file = req.file;

    const doc = await Document.create({
      filename: file.originalname,
      filepath: file.path,
      filesize: file.size
    });

    return res.json({ success: true, data: doc });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const getDocuments = async (req, res) => {
  try {
    const docs = await Document.find().sort({ createdAt: -1 });
    return res.json({ success: true, data: docs });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const downloadDocument = async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);

    if (!doc) return res.status(404).json({ success: false, message: "Not found" });

    return res.download(doc.filepath, doc.filename);
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteDocument = async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);

    if (!doc) return res.status(404).json({ success: false, message: "Not found" });

    // delete file
    fs.unlinkSync(doc.filepath);

    // remove DB record
    await doc.deleteOne();

    return res.json({ success: true, message: "Document deleted" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
