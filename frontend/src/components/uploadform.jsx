import { useState } from "react";
import { uploadPDF } from "../api/document";

export default function UploadForm({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select a PDF!");

    setLoading(true);
    const result = await uploadPDF(file);
    setLoading(false);

    if (result.success) {
      alert("Uploaded Successfully!");
      setFile(null);
      onUploadSuccess();
    } else {
      alert(result.message || "Upload failed");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];

    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
    } else {
      alert("Only PDF files allowed");
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-200 space-y-6 transition-all">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        📄 Upload PDF
      </h2>

      {/* DRAG AND DROP BOX */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-all"
      >
        <p className="text-gray-600 mb-3">
          Drag & Drop your PDF here or click below
        </p>

        {/* File Select Input */}
        <label className="bg-gray-100 px-4 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-200 transition">
          Select PDF
          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
      </div>

      {/* FILE CHIP */}
      {file && (
        <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 p-3 rounded-lg">
          <span className="text-blue-700 font-medium truncate">
            {file.name}
          </span>

          <button
            onClick={() => setFile(null)}
            className="text-red-600 hover:text-red-800 font-bold text-xl"
          >
            ×
          </button>
        </div>
      )}

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={loading || !file}
        className={`w-full py-3 rounded-xl text-white font-semibold transition-all shadow 
          ${
            loading || !file
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-blue-800 hover:scale-[1.02]"
          }`}
      >
        {loading ? "Uploading..." : "Upload PDF"}
      </button>
    </div>
  );
}
