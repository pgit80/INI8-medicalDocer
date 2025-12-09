import { downloadDocument, deleteDocument } from "../api/document";

export default function DocumentsList({ documents, refresh }) {
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this document?")) return;

    const result = await deleteDocument(id);
    if (result.success) {
      alert("Deleted!");
      refresh();
    } else {
      alert("Failed to delete");
    }
  };

  return (
    <div className="p-8 rounded-2xl shadow-xl bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 text-white border border-white/20">
      <h2 className="text-3xl font-extrabold mb-6 flex items-center gap-3 drop-shadow-lg">
        🎨 Your Colorful Files
      </h2>

      {/* EMPTY STATE */}
      {documents.length === 0 && (
        <div className="text-center py-10">
          <div className="text-7xl animate-bounce mb-4">📂</div>
          <p className="text-lg font-medium">No files yet</p>
          <p className="text-sm text-white/80">Start uploading and see magic 🌈</p>
        </div>
      )}

      <ul className="space-y-5">
        {documents.map((doc) => (
          <li
            key={doc._id}
            className="flex justify-between items-center p-5 rounded-2xl 
              bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg
              hover:bg-white/30 hover:scale-[1.02] transition-all duration-300"
          >
            {/* LEFT */}
            <div className="flex items-center gap-4">
              <div className="text-5xl drop-shadow-lg">📄</div>

              <div>
                <p className="font-semibold text-xl drop-shadow-sm">{doc.filename}</p>
                <p className="text-sm text-white/90">
                  {(doc.filesize / 1024).toFixed(1)} KB
                </p>
              </div>
            </div>

            {/* RIGHT BUTTONS */}
            <div className="flex gap-3">
              <button
                onClick={() => downloadDocument(doc._id)}
                className="px-4 py-2 rounded-xl text-white font-semibold 
                  bg-blue-600 hover:bg-blue-700 hover:shadow-xl shadow 
                  transition-all active:scale-95"
              >
                ⬇️ Download
              </button>

              <button
                onClick={() => handleDelete(doc._id)}
                className="px-4 py-2 rounded-xl text-white font-semibold 
                  bg-red-600 hover:bg-red-700 hover:shadow-xl shadow 
                  transition-all active:scale-95"
              >
                ❌ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
