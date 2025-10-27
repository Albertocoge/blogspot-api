📰 Blogspot API

Full-Stack MERN Blogging Platform — Backend

A secure and scalable RESTful API built with Node.js, Express, and MongoDB designed for a blogging platform inspired by Medium. Users can register, publish articles, manage their profile, and explore content from a growing community of authors.

🌍 Frontend Repository: blogspot-app (React)

🚀 Live Demo: https://blogspot-app-mauve.vercel.app/

📌 Project Overview

Blogspot is a Full-Stack MERN application (MongoDB, Express, React, Node.js) built to provide a space where users can write, share, and read articles.
The backend handles user authentication, CRUD operations for posts, image uploads, categories, and complete error and security handling.

🧩 Tech Stack

Backend

Node.js + Express.js

MongoDB + Mongoose ODM

JWT Authentication

bcrypt.js password hashing

express-fileupload image uploading

dotenv environment configuration

CORS with support for production clients

Frontend

React + Vite

Axios API integration

TailwindCSS for modern and responsive UI

📂 Project Structure
blogspot-api/
│
├── controllers/
│   ├── postControllers.js
│   └── userControllers.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── models/
│   ├── postModel.js
│   ├── userModel.js
│   └── errorModel.js
│
├── routes/
│   ├── postRoutes.js
│   └── userRoutes.js
│
├── uploads/                # File storage (thumbnails & avatars)
├── index.js                # Server entry point
├── .env.example            # Environment variable sample
├── package.json
└── LICENSE

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/Albertocoge/blogspot-api.git
cd blogspot-api

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables

Create a .env file:

PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secure-jwt-key>
CLIENT_URL=http://localhost:5173

4️⃣ Start the server (development)
npm run dev


Backend runs at:
👉 http://localhost:5000

📡 API Endpoints
🧑‍💻 Users /api/users
Method	Endpoint	Description	Auth
POST	/register	Register a new user	❌
POST	/login	Authenticate user & return JWT token	❌
GET	/:id	Get user profile by ID	❌
GET	/	Get all authors	❌
POST	/change-avatar	Update user profile picture	✅
PATCH	/edit-user	Update name, email & password	✅
📝 Posts /api/posts
Method	Endpoint	Description	Auth
POST	/	Create a post + thumbnail upload	✅
GET	/	Fetch all posts	❌
GET	/:id	Get single post by ID	❌
GET	/categories/:category	Posts by category	❌
GET	/users/:id	Posts by author	❌
PATCH	/:id	Update a post	✅
DELETE	/:id	Delete a post	✅
🔐 Security Features

Encrypted passwords using bcrypt.js

JWT authentication with 1-day expiration

File upload restrictions (size & type)

Centralized error handling

CORS configured for both local and production clients

✅ Production Client Domains

http://localhost:5173

https://blogspot-app-mauve.vercel.app

https://blogspot-app-lyart.vercel.app

https://blogspot-app-testing.vercel.app

🧑‍🎨 Author

👤 Alberto Codoñer
👤 Michael B. Diaz B.
Full-Stack Developer | MERN Stack
🔗 GitHub: https://github.com/Albertocoge

🎨 Frontend: https://github.com/Albertocoge/blogspot-app.git

🌍 Live App: https://blogspot-app-mauve.vercel.app/

🪪 License

Released under the ISC License.
You are free to use, modify, and distribute the code with attribution.

🚀 Feature Roadmap
Feature	Status
Comments on posts	⏳ Planned
Multiple tags per article	⏳ Planned
Pagination & advanced filters	⏳ Planned
Admin dashboard	⏳ Planned
Cloud image hosting (Cloudinary)	⏳ Planned
⭐️ Support

If you like this project, consider giving it a star ⭐ on GitHub — it motivates and supports open-source development!
