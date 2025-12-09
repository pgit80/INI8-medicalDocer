import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  filepath: { type: String, required: true },
  filesize: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Document", documentSchema);
