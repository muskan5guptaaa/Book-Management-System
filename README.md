📚 Book Management System – Microservices Architecture
This is a microservices-based project for managing user authentication, profiles, and their books using Node.js, Express.js, MongoDB, and JWT. It consists of three services:

🧩 Services Overview
1. 🔐 Auth Service (auth-service)
Handles authentication (register, login) and token generation.

Endpoints:

POST /api/auth/register – Register a new user
Body: { "email": "user@example.com", "password": "123456" }

POST /api/auth/login – Login user and receive JWT
Body: { "email": "user@example.com", "password": "123456" }

2. 👤 User Service (user-service)
Handles retrieving and updating user profile details.

Endpoints:

GET /api/users/profile – Get user profile
Headers: Authorization: Bearer <JWT_TOKEN>

PUT /api/users/profile – Update user profile
Headers: Authorization: Bearer <JWT_TOKEN>
Body: { "name": "John Doe", "email": "john@example.com" }

3. 📚 Book Service (book-service)
Allows users to create and view their books.

Endpoints:

POST /api/books/create – Create a book
Headers: Authorization: Bearer <JWT_TOKEN>
Body: { "title": "Book Title", "author": "Author Name", "description": "Details" }

GET /api/books/getBooks – Get all books of the logged-in user
Headers: Authorization: Bearer <JWT_TOKEN>

GET /api/books/:id – Get a specific book by ID (if owned by user)
Headers: Authorization: Bearer <JWT_TOKEN>

🔐 Authentication
JWT tokens are issued by the Auth Service.
Each protected route checks for a valid JWT token.
Services communicate securely using JWT for user identification.

⚙️ Requirements
Node.js
MongoDB (local or cloud)
Express.js
Axios for inter-service communication
JWT for authentication