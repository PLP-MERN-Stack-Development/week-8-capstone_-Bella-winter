### ShopNowWithPolin
A fully functional eCommerce web application built using the MERN stack (MongoDB, Express, React, Node.js) with real-time updates, authentication, API testing, and modern UI design.
 This is a project done with alot of time, errors and not yet gotten what i had in mind. Planning on working on it fully till I get What i Really Wanted.


## 📌 Features

### 👥 User Features
- User registration & login (JWT authentication)
- Browse products with details
- Add/remove items to/from cart
- Place orders & view order history
- Real-time order status updates
- Chat with admin (via Socket.io)

### 🛠️ Admin Features
- Add/update/delete products
- View all users and orders
- Real-time customer chat
- Order status management

## 🧱 Tech Stack

| Layer     | Technology                     |
|-----------|--------------------------------|
| Frontend  | React, Tailwind CSS, Axios     |
| Backend   | Express.js, Node.js            |
| Database  | MongoDB (Atlas) + Mongoose     |
| Auth      | JWT                            |
| Realtime  | Socket.io                      |
| Testing   | Jest, Supertest, Cypress       |
| DevOps    | GitHub Actions, Vercel, Render |

---

## 🗂️ Project Structure

ShopNowWithPolin/
├── server/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── config/
│ └── server.js
├── client/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ ├── App.jsx
│ │ └── main.jsx
├── .env
└── README.md

## ⚙️ Setup Instructions

### ✅ Prerequisites
- Node.js and pnpm installed
- MongoDB Atlas account (or local MongoDB)
- Vercel/Render accounts for deployment

### 🚀 Backend Setup

```bash
cd server
pnpm install
pnpm run dev
```
🌐 Frontend Setup
bash
Copy
Edit
cd client
pnpm install
pnpm run dev
🔌 API Documentation
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
GET	/api/products	List all products
POST	/api/orders	Place new order
GET	/api/orders/user/:id	Get user order history

➡️ Full API documentation available in /server/docs/API.md

🔐 Authentication & Authorization
JSON Web Tokens (JWT)

Protected routes using middleware

Role-based access (user/admin)

🔁 Real-time Features (Socket.io)
Real-time order status updates

Live customer–admin chat support

🧪 Testing
Type	Tools	Description
Unit Testing	Jest	API logic & utility functions
Integration	Supertest	REST endpoints & DB interactions
E2E Testing	Cypress	Critical user flows (e.g. checkout)

Run tests:

bash
Copy
Edit
pnpm test
🌍 Deployment
Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

📊 CI/CD & Monitoring
GitHub Actions for testing + deployment

Environment-specific .env support

Logging and monitoring via Render logs

🧑‍💻 Contributing
Feel free to fork and PR!

Clone the repo

Create a new branch

Submit your pull request ✅

📘 License
MIT License

📽️ Demo
Coming Soon! (or insert link here)

👩‍💻 Developer
Pauline Mwangi
Email: polinmwangi6115@gmail.com
GitHub: @Bella-winter