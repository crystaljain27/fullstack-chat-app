# Full-Stack Real-Time Chat Application

A feature-rich, real-time messaging application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.io. This project features secure user authentication, real-time messaging, and online presence indicators, demonstrating a full-stack development workflow from backend API to a responsive frontend.

**[Live Demo](https://fullstack-chat-app-orcin.vercel.app/)**

## Key Features

- **Real-Time Messaging:** Instant, bidirectional communication between users powered by Socket.io.
- **Secure User Authentication:** JWT-based authentication with password hashing (bcrypt) to ensure user data is secure.
- **Online Presence:** Users can see who is currently online.
- **Responsive Design:** A clean and modern user interface built with React and styled with TailwindCSS and Daisy UI, ensuring a great experience on any device.
- **RESTful API:** A well-structured backend API built with Node.js and Express for handling all application logic and data.

## Technologies Used

### Frontend
- **React:** For building the user interface.
- **Socket.io-client:** For real-time WebSocket communication.
- **Zustand:** For lightweight global state management.
- **Axios:** For making HTTP requests to the backend API.
- **TailwindCSS & Daisy UI:** For styling and UI components.
- **React-hot-toast:** For user-friendly notifications.

### Backend
- **Node.js & Express.js:** For building the server and RESTful API.
- **MongoDB & Mongoose:** As the NoSQL database for storing user and message data.
- **Socket.io:** For handling real-time WebSocket connections on the server.
- **JSON Web Tokens (JWT):** For securing the API and managing user sessions.
- **Bcrypt.js:** For hashing user passwords before storing them in the database.
- **Cloudinary:** For cloud-based image storage and management (e.g., profile pictures).

## Local Setup & Installation

To run this project on your local machine, follow these steps:

**1. Clone the repository:**
```
git clone https://github.com/crystaljain27/fullstack-chat-app.git
cd fullstack-chat-app
```

**2. Set up the Backend:**
```
cd backend
npm install
```
Create a `.env` file in the `backend` directory and add the necessary environment variables (e.g., `MONGODB_URI`, `JWT_SECRET`, `PORT`).
```
npm start
```

**3. Set up the Frontend:**
```
cd ../frontend
npm install
```
Create a `.env` file in the `frontend` directory and set `VITE_API_URL` to point to your backend server (e.g., `http://localhost:5001`).
```
npm run dev
```
```