# MERN MongoDB CRUD Demo

## Overview
Project for Task 3: implements Create, Read, Update, Delete on MongoDB users.

## How to Run

1. Install dependencies
    ```bash
    npm install
    ```

2. Set up `.env` file with:
    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    NODE_ENV=development
    ```

3. Start server
    ```bash
    node server.js
    ```

## API Endpoints

- POST /api/users — Create user
- GET /api/users — Read users (with optional filters)
- PUT /api/users/:id — Update user
- DELETE /api/users/:id — Delete user

## Features

- CRUD operations for users
- Data validation and error handling
- Pagination and filtering for GET requests
- MongoDB integration with Mongoose
- Express.js server with proper middleware

## Project Structure

- `server.js` - Main server file
- `routes/` - API route definitions
- `controllers/` - Business logic
- `models/` - Database models
- `middleware/` - Custom middleware functions
- `config/` - Configuration files

## Dependencies

- express: Web framework
- mongoose: MongoDB ODM
- dotenv: Environment variable management
- cors: Cross-origin resource sharing
- express-async-handler: Async error handling

## Development

To run in development mode:
```bash
npm run dev
```

To run tests:
```bash
npm test
```

