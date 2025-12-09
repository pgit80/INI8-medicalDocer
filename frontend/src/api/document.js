const BASE_URL = "http://localhost:5001/documents";

export const uploadPDF = async (file) => {
  const formData = new FormData();
  formData.append("pdf", file);

  const res = await fetch(`${BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  return res.json();
};

export const getAllDocuments = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const downloadDocument = (id) => {
  window.open(`${BASE_URL}/${id}`, "_blank");
};

export const deleteDocument = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  return res.json();
};
