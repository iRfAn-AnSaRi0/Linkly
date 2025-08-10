# 🔗 Shortify — URL Shortener

A simple and responsive URL shortener web application built with **React** (frontend) and **Node.js + Express** (backend).  
It allows users to shorten long URLs, track how many times the shortened link has been clicked, and see the date/time it was created — all in a clean history page.

---

## 📌 Features

- Shorten long URLs into compact links.
- Track:
  - Original URL
  - Shortened URL
  - Number of clicks
  - Creation date & time
- Responsive design for desktop & mobile.
- Clickable shortened URLs that redirect instantly.
- Persistent history view.

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **Tailwind CSS** (for styling)
- **Axios** (API requests)

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (or any database you choose for storing URL data)
- **Mongoose** (if using MongoDB)

---

## 📂 Project Structure

project-root/
│
├── backend/
│ ├── server.js # Main server entry point
│ ├── models/Url.js # URL schema/model
│ ├── routes/urlRoutes.js # API routes
│ └── ...
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── Home.jsx # Main page with URL input
│ │ │ ├── History.jsx # History page showing all shortened URLs
│ │ ├── components/...
│ │ └── App.js
│ └── ...
│
└── README.md

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/shortify.git
cd shortify

2️⃣ Install dependencies

Backend

bash
Copy
Edit
cd backend
npm install
Frontend

bash
Copy
Edit
cd frontend
npm install

3️⃣ Environment variables

Create a .env file in the backend folder and add:

ini
Copy
Edit
PORT=8000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:8000/api
4️⃣ Run the application
Backend

bash
Copy
Edit
cd backend
npm start
Frontend

bash
Copy
Edit
cd frontend
npm start

📡 API Endpoints

Method	Endpoint	Description
POST	/api/shorten	Shortens a given URL
GET	/:code	Redirects to original URL
GET	/api/history	Fetches all shortened URLs

📱 Screenshots
Home Page
Input field for the original URL.

Displays shortened link.

History Page
Shows original URL, shortened URL, click count, and creation time.

Fully responsive.

📜 License
This project is licensed under the MIT License.
