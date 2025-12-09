import { useEffect, useState } from "react";
import UploadForm from "./components/uploadform";
import DocumentsList from "./components/ Documentlist";
import { getAllDocuments } from "./api/document";

export default function App() {
  const [documents, setDocuments] = useState([]);

  const loadDocuments = async () => {
    const result = await getAllDocuments();
    if (result.success) {
      setDocuments(result.data);
    }
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-2xl mx-auto space-y-6">
        <UploadForm onUploadSuccess={loadDocuments} />
        <DocumentsList documents={documents} refresh={loadDocuments} />
      </div>
    </div>
  );
}
