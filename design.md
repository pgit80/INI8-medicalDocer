# About this Project - INI8 Assessment

# -------------1. Tech Stack Choices----------------------------

- Q1. What frontend framework did you use and why? (React, Vue, etc.)

- I used React to build frontend as it is easy to implement with basic javascript and it has a lot of community support and docs. Also I learned it at some level so I was hands-on with it.

Q2. What backend framework did you choose and why? (Express, Flask, Django, etc.)
I Used Express.js to implement backend because it is built on top of node.js and easily integratable with React.js. I have previous working experience with it.

Q3. What database did you choose and why? (SQLite vs PostgreSQL vs others)
I used MongoDB as database as it allows to store data remotely and provides free 512 MB space to start with. It is super handy and easy to use with Express backend and comes with a lot of libraries to help.

Q4. If you were to support 1,000 users, what changes would you consider?
Handlin 1000 users is a deal but not a big deal, it can be easily done by database indexing, caching. Rate Limiting, contenarization etc. Load Balancing can also help.

# ---------------2. Architecture Overview

Directory structure:
└── pgit80-ini8-medicaldocer/
├── backend/
│ ├── package.json
│ └── src/
│ ├── app.js
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ └── documentController.js
│ ├── middleware/
│ │ └── upload.js
│ ├── models/
│ │ └── Document.js
│ └── routes/
│ └── documentRoutes.js
└── frontend/
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
├── App.css
├── App.jsx
├── index.css
├── main.jsx
├── api/
│ └── document.js
└── components/
├── Documentlist.jsx
└── uploadform.jsx

1.  Draw or describe the flow between frontend, backend, database, and file storage.

                     ┌─────────────────────────────┐
                     │         FRONTEND (React)     │
                     │  uploadform.jsx              │
                     │  Documentlist.jsx            │
                     └──────────────┬──────────────┘
                                    │ HTTP (Axios / Fetch)
                                    ▼
                     ┌─────────────────────────────┐
                     │       BACKEND (Node/Express) │
                     │  app.js                      │
                     │  Routes → documentRoutes.js  │
                     │  Controllers → documentController.js
                     │  Middleware → upload.js (Multer)
                     └──────────────┬──────────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
                    ▼                               ▼

        ┌───────────────────────┐ ┌────────────────────────┐
        │ FILE STORAGE │ │ DATABASE (MongoDB) │
        │ /uploads folder │ │ Document model │
        │ or cloud (S3, etc.) │ │ db.js connection │
        └───────────────────────┘ └────────────────────────┘

         Endpoints          Method	   Description

    /documents/upload POST Upload a PDF
    /documents GET List all documents
    /documents/:id GET Download a file
    /documents/:id DELETE Delete a file
