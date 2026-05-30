# CleanMaster

Cleaning Service Management System built for fast bookings, clean administration and real-time content updates across the client and admin panels.

This project pairs a React frontend with an Express + MongoDB backend to deliver a sleek service browsing experience, secure authentication and a practical admin workspace for managing services, gallery items and bookings.

## What Makes It Modern

- Live service and gallery data pulled from the backend
- Clean, responsive UI structure for desktop and mobile
- Role-based admin access
- Modular frontend components and reusable logic
- MongoDB persistence for bookings and content
- Simple setup with clear frontend/backend separation

## Project Snapshot

- **Frontend:** React + Vite + React Router DOM
- **Backend:** Node.js + Express + MongoDB
- **Auth:** JWT with hashed passwords
- **Admin Tools:** Dashboard, service management, gallery management

## Technology Stack

### Frontend
- React
- Vite
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT authentication
- bcryptjs password hashing

## Folder Structure

```text
Cleaning-Service-Management-System/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── assets/
│   │   ├── components/
│   │   ├── data/
│   │   ├── lib/
│   │   └── pages/
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── package.json
└── README.md
```

## Project Overview

- `backend/` contains the API server, database models, authentication, and admin routes.
- `frontend/` contains the React UI for customers and admins.
- The frontend reads live services and gallery data from the backend, so admin updates appear on the client side after refresh.

## Environment Setup

### Backend `.env`
Create a file at `backend/.env` with values like these:

```env
NODE_ENV=development
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:5173
ADMIN_EMAIL=admin@cleanmaster.com
ADMIN_PASSWORD=your_admin_password
```

### Frontend `.env`
If you want to override the backend URL, create `frontend/.env`:

```env
VITE_API_URL=http://localhost:5001/api
```

## Install Dependencies

Run these commands in separate terminals:

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd frontend
npm install
```

## Run the Project

### Start the backend

```bash
cd backend
npm run dev
```

Backend default URL:

```text
http://localhost:5001
```

Health check:

```text
http://localhost:5001/api/health
```

### Start the frontend

```bash
cd frontend
npm run dev
```

Frontend default URL:

```text
http://localhost:5173
```

## Useful Scripts

### Frontend

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### Backend

```bash
npm run dev
npm start
```

## Admin Access

The admin account is seeded from the backend environment values:

- Email: `ADMIN_EMAIL`
- Password: `ADMIN_PASSWORD`

If you change these values, restart the backend so the new admin credentials are applied.

## Notes

- Keep secrets only in local `.env` files.
- Do not commit `.env` files to git.
- Use `.env.example` as the safe template for new contributors.
- If port `5001` is already in use, stop the existing backend process before starting a new one.

## Troubleshooting

### Backend does not start
- Check that MongoDB URI is valid.
- Make sure `PORT=5001` is free.
- Verify that `.env` exists inside `backend/`.

### Frontend cannot reach backend
- Confirm the backend is running.
- Check `VITE_API_URL`.
- Make sure the backend CORS origin matches your frontend URL.

## License

No license has been added yet.
