Here is a clean, professional **README.md** you can directly place in your repository:

---

# **INI8 Medical Document Portal (MERN Stack)**

A simple full-stack portal where users can upload, view, download, and delete PDF documents.
Built with **React (Vite)**, **Node.js + Express**, **MongoDB**, and **Multer** for file uploads.

---

# 🚀 **Features**

* Upload PDF documents
* View all uploaded documents
* Download documents
* Delete documents
* Backend stores metadata in MongoDB and files in local storage
* Clean MERN structure (frontend + backend)

---

# 📁 **Project Structure**

```
pgit80-ini8-medicaldocer/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── config/db.js
│   │   ├── controllers/documentController.js
│   │   ├── middleware/upload.js
│   │   ├── models/Document.js
│   │   └── routes/documentRoutes.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── components/
    │   │   ├── uploadform.jsx
    │   │   └── Documentlist.jsx
    │   └── api/document.js
    └── package.json
```

---

# 🛠 **Requirements**

Install the following:

* Node.js (v18+)
* MongoDB (local or Atlas cloud)
* Git

---

# ⚙️ **1. Clone the Repository**

```bash
git clone https://github.com/pgit80/INI8-medicalDocer.git
cd INI8-medicalDocer
```

---

# 📦 **2. Install Backend Dependencies**

```bash
cd backend
npm install
```

---

# 🔧 **3. Configure Environment Variables**

Create a `.env` file inside the **backend** folder:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/medicaldocer
UPLOAD_DIR=uploads
```

---

# ▶️ **4. Start the Backend Server**

```bash
npm run dev
```

Backend will run at:

```
http://localhost:5000
```

---

# 💻 **5. Install Frontend Dependencies**

Open a second terminal:

```bash
cd frontend
npm install
```

---

# ▶️ **6. Start the Frontend**

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🔗 **7. API Endpoints**

| Endpoint            | Method | Description        |
| ------------------- | ------ | ------------------ |
| `/documents/upload` | POST   | Upload a PDF       |
| `/documents`        | GET    | List all documents |
| `/documents/:id`    | GET    | Download a file    |
| `/documents/:id`    | DELETE | Delete a file      |

---

# 📁 **Upload Folder**

The backend stores uploaded PDFs in:

```
backend/uploads/
```

Make sure the folder exists. If not, create it:

```bash
mkdir backend/uploads
```

---

# 🧪 **Testing**

Use Postman or Thunder Client to test endpoints.

Example file upload:

* Method: **POST**
* URL: `http://localhost:5000/api/documents/upload`
* Body → form-data → key = `pdf`, type = File

---

# 📝 **Notes**

* This project uses **Multer** for file uploads.
* Files are stored locally but can be configured for AWS S3 or Cloudinary.
* MongoDB stores document metadata such as filename, path, and timestamp.

---

# 🎉 **You're Ready!**

The project should now be fully running locally at:

* Frontend: **[http://localhost:5173](http://localhost:5173)**
* Backend: **[http://localhost:5000](http://localhost:5000)**

---

# Note- GenAI is used to build this project. Because I think if I know the method and AI knows to write code then it is no sin to take help of AI to write code. 
# If your company permits this then well and good otherwise, I'll have one more project with me. 
# Thanks!! -_- :)
