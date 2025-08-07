# Full-Stack Authentication System

A complete authentication system built with React (frontend) and Node.js/Express (backend) with MongoDB.

## Features

- ✅ User Registration with validation
- ✅ User Login with JWT tokens
- ✅ Protected routes with authentication middleware
- ✅ User profile management
- ✅ Logout functionality
- ✅ Form validation (client & server side)
- ✅ Error handling and user feedback
- ✅ Responsive design with Tailwind CSS

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM (Object Document Mapper)
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework

## Project Structure

```
├── backend/
│   ├── controllers/
│   │   └── authControllers.js    # Authentication logic
│   ├── middleware/
│   │   └── auth.js              # JWT verification middleware
│   ├── models/
│   │   └── User.js              # User schema
│   ├── routes/
│   │   └── auth.js              # Authentication routes
│   ├── .env.example             # Environment variables template
│   ├── db.js                    # Database connection
│   └── server.js                # Express server setup
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx        # Login component
│   │   │   ├── Register.jsx     # Registration component
│   │   │   └── Homepage.jsx     # Dashboard/home component
│   │   ├── App.js               # Main app component
│   │   └── index.js             # Entry point
│   └── tailwind.config.js       # Tailwind configuration
└── README.md
```

## API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register new user |
| POST | `/login` | Login user |
| GET | `/profile` | Get user profile (protected) |

### Request/Response Examples

#### Register User
```http
POST /register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "status": "success",
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

#### Login User
```http
POST /login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "status": "success",
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

#### Get User Profile
```http
GET /profile
Authorization: Bearer jwt_token_here

Response:
{
  "status": "success",
  "user": {
    "id": "user_id",
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

## Setup Instructions

### Backend Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your configuration:
   ```
   MONGODB_URI=mongodb://localhost:27017/auth_system
   JWT_SECRET=your_super_secret_key
   PORT=5000
   ```

3. **Start MongoDB** (make sure MongoDB is running)

4. **Start the server:**
   ```bash
   npm start
   ```

### Frontend Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## Usage

1. **Register:** Create a new account at `/register`
2. **Login:** Sign in with your credentials at `/login`
3. **Dashboard:** View your profile and user information at `/home`
4. **Logout:** Click the logout button to sign out

## Security Features

- **Password Hashing:** All passwords are hashed using bcrypt
- **JWT Tokens:** Secure authentication tokens with expiration
- **Input Validation:** Both client and server-side validation
- **Protected Routes:** Authentication required for sensitive endpoints
- **CORS Protection:** Configured for cross-origin requests
- **Error Handling:** Comprehensive error handling and user feedback

## Development

### Adding New Features

1. **Backend:** Add new routes in `backend/routes/auth.js`
2. **Controllers:** Implement logic in `backend/controllers/authControllers.js`
3. **Frontend:** Create new components in `frontend/src/components/`
4. **Styling:** Use Tailwind CSS classes for responsive design

### Testing

Run backend tests:
```bash
cd backend
npm test
```

## Environment Variables

Create a `.env` file in the backend directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/your_database_name

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=24h

# Server Configuration
PORT=5000


