# InvestaFlow

InvestaFlow is a full-stack Zerodha-like stock trading dashboard built using:

Deployed Link : https://investa-flow-home.vercel.app/

- **Frontend**: React JS + Vite + Bootstrap
- **Backend**: Node.js + Express + MongoDB + JWT authentication
- **Deployment**: Vercel (frontend), Render (backend)
- **APIs**: Finnhub for live stock data

---

## 🔧 Project Structure

```
investa-flow/
├── backend/                 # Express server, routes, MongoDB models
│   ├── controller/          # AuthController.js
│   ├── middleware/          # AuthMiddleware.js
│   ├── models/              # User.js, Position.js, etc.
│   └── index.js             # Main server entry point
├── frontend/                # React public site (login/signup)
├── dashboard/               # React private dashboard (after login)
│   ├── components/          # Menu, Topbar, Holdings, Orders etc.
│   └── Styles/              # Dashboard styling
└── README.md                # This file
```

---

## 🚀 Features

- ✅ User Signup/Login with hashed passwords
- ✅ Cookie-based JWT authentication (`httpOnly`, `secure`, `SameSite=None`)
- ✅ Real-time Nifty, Sensex, and global index data via Finnhub API
- ✅ Dashboard with:
  - Holdings overview
  - Positions tracking
  - Orders management
  - Funds status
- ✅ Watchlist with live updates and Buy/Sell actions
- ✅ Fully responsive UI with modern layout

---

## 📦 Installation

### 1. Backend

```bash
cd backend
npm install
npm run dev
```

### 2. Frontend + Dashboard (Vite-based)

```bash
cd frontend
npm install
npm run dev
```

```bash
cd dashboard
npm install
npm run dev
```

---

## 🌐 Environment Variables

**Backend (`.env`)**

```
PORT=3002
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/investaFlow
JWT_SECRET=your_jwt_secret_here
CLIENT_URL=https://investa-flow-home.vercel.app
```

> Replace with actual secrets and whitelist domains in your CORS.

**Frontend/Dashboard (`.env`)**

```
REACT_APP_BACKEND_URL=https://investaflow.onrender.com
REACT_APP_DASHBOARD_URL=https://investa-flow-dashboard.vercel.app
REACT_APP_API_KEY=your_finnhub_key
```

---

## 🧪 API Endpoints

| Endpoint     | Method | Description             |
| ------------ | ------ | ----------------------- |
| `/signup`    | POST   | Register user           |
| `/login`     | POST   | Login user & set cookie |
| `/logout`    | POST   | Clear cookie            |
| `/verify`    | GET    | Protected user check    |
| `/holdings`  | GET    | User's holdings         |
| `/positions` | GET    | Positions info          |
| `/orders`    | POST   | Place orders            |

---

## 🔒 Authentication

- JWT token is stored in a **secure HTTP-only cookie**
- CORS configured to allow frontend domains
- `userVerification` middleware protects routes

---

## 📷 Screenshots

-Home
![Screenshot](./readme%20assets/Screenshot%202025-07-07%20181459.png)

- Signup
  ![Screenshot](./readme%20assets/Screenshot%202025-07-07%20181531.png)
- Dashboard Overview
  ![Dashboard Screenshot](./readme%20assets/Screenshot%202025-07-07%20190431.png)
- Holdings Visuals
  ![Screenshot](./readme%20assets/Screenshot%202025-07-07%20190506.png)
- Order Tables
  ![Screenshot](./readme%20assets/Screenshot%202025-07-07%20190447.png)

---

---

## 🛠 Technologies Used

- React + Vite + Bootstrap
- Node.js + Express + Mongoose
- JWT + Bcrypt.js for Auth
- Finnhub API for Market Data

---

## 📦 Deployment

- **Frontend (Public)**: [Vercel](https://vercel.com)
- **Dashboard (Private)**: [Vercel](https://vercel.com)
- **Backend**: [Render](https://render.com)
- Ensure CORS and cookie settings match domain security (HTTPS + SameSite)

---

## 🙌 Acknowledgments

Thanks to:

- [Finnhub.io](https://finnhub.io) for market data
- Bootstrap for styling

---

## 👨‍💻 Author

Prasad Waster — [LinkedIn](https://www.linkedin.com/in/prasad-waster/) — Full-stack Developer

---

MIT License © 2025 Prasad Waster
