# 🎬 CineBurst - Movie Booking App

**CineBurst** is a full-featured virtual movie ticket booking application built using the **MERN Stack (MongoDB, Express, React, Node.js)**. It allows users to explore movies, view details, select a showtime, book seats, and complete the payment online — replicating the real-world experience of booking a movie ticket digitally.

![CineBurst UI](https://your-image-link.com/banner.jpg) <!-- Optional: Add image link or remove line -->

---

## 🌐 Live Demo

🚧 Coming Soon...

---

## 📌 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Folder Structure](#-folder-structure)
- [API Endpoints](#-api-endpoints)
- [Environment Variables](#-environment-variables)
- [Future Scope](#-future-scope)
- [Author](#-author)
- [License](#-license)

---

## 🎯 Features

### 👥 User-Side Features
- Browse currently playing and upcoming movies
- Filter by genre, language, and release date
- View movie trailers, ratings, description, cast, and duration
- Select theatre, date, time, and available screens
- Interactive seat selection system
- Razorpay payment integration
- Get booking summary after confirmation

### 🔐 Admin-Side Features *(In Progress)*
- Login/Register admin
- Add/edit/delete movies
- Add/edit theatres and screens
- Schedule shows
- View all bookings

---

## ⚙️ Tech Stack

| Frontend      | Backend     | Database | Tools & Libraries        |
|---------------|-------------|----------|---------------------------|
| React.js (Vite) | Node.js     | MongoDB  | Axios, Lucide Icons       |
| React Router  | Express.js  | Mongoose | Razorpay Integration      |
| Tailwind CSS / Custom CSS | JWT Auth (Optional) | dotenv | Framer Motion (Optional) |

---

## 📸 Screenshots

> (Replace with actual screenshots later)

- 🎬 Home Page with movie carousel
- 🎞️ Movie Detail Page
- 🏛️ Theatre selection and showtime screen
- 🪑 Seat selection layout
- 💳 Razorpay Payment gateway

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Rajputsaiyam/CineBurst.git
cd CineBurst
2. Backend Setup
bash
Copy
Edit
cd server
npm install
npm start
⚠️ Make sure to configure your MongoDB URI in .env file.

.env Example:
env
Copy
Edit
PORT=8000
MONGO_URI=your-mongodb-uri
RAZORPAY_KEY=your-razorpay-key
RAZORPAY_SECRET=your-razorpay-secret
3. Frontend Setup
bash
Copy
Edit
cd client
npm install
npm run dev
The frontend runs at http://localhost:5173 and connects to the backend running at http://localhost:8000.

📂 Folder Structure
bash
Copy
Edit
CineBurst/
├── client/                 # React Frontend
│   ├── components/         # Reusable UI Components
│   ├── pages/              # Route Pages (Movie, Booking, etc.)
│   ├── services/           # Axios API Calls
│   ├── assets/             # Static Files
│   └── App.jsx             # Main App File

├── server/                 # Express Backend
│   ├── models/             # MongoDB Schemas
│   ├── routes/             # Route Files
│   ├── controllers/        # Controller Logic
│   ├── config/             # DB Connection, Razorpay Setup
│   └── index.js            # Entry Point

└── README.md
📡 API Endpoints
🎬 Movies
GET /admin/movies – Get all movies

GET /admin/movies/:id – Get movie by ID

POST /admin/movies – Add a movie (Admin)

PUT /admin/movies/:id – Update movie (Admin)

DELETE /admin/movies/:id – Delete movie (Admin)

🏛️ Theatres
GET /theatres/ – Get all theatres

GET /theatres/:id – Get theatre details

POST /theatres/ – Add a theatre (Admin)

🎟️ Bookings
POST /bookings/ – Book tickets

GET /bookings/user/:userId – Get user bookings

GET /bookings/movie/:movieId – Get bookings by movie

💳 Payment
POST /payment/create-order – Create Razorpay order

POST /payment/verify – Verify payment

🔐 Environment Variables
Create .env files in both server/ and client/ (if using environment variables for keys).

env
Copy
Edit
# Server/.env
PORT=8000
MONGO_URI=your_mongo_uri
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
🧠 Future Scope
📱 Make PWA with offline booking features

📧 Email and SMS confirmation

🧾 Ticket PDF download

🧑‍💼 Admin dashboard with analytics

🔍 ElasticSearch for fast filtering

🔐 Role-based access (Admin, User)

🙋‍♂️ Author
Saiyam Rajput
📧 saiyamrajput71@gmail.com
🔗 LinkedIn
💻 GitHub

📄 License
This project is licensed under the MIT License.
