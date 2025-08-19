# 🛒 MERN E-Commerce Shopping Cart Application

A full-stack e-commerce application built with **MongoDB**, **Express**, **React**, and **Node.js** (MERN stack) featuring a complete shopping cart system with product management.

## 🚀 How It All Works

### **Architecture Overview**
- **Frontend**: React with React Router for navigation, TailwindCSS for styling
- **Backend**: Node.js/Express REST API with MongoDB
- **Database**: MongoDB with Mongoose ODM
- **State Management**: React hooks (useState, useEffect)
- **API Communication**: Axios for HTTP requests

### **System Flow**
1. **User visits the site** → React app loads → Fetches products from `/items` endpoint
2. **Browse products** → Product list displays with cards showing image, name, price, description
3. **Add to cart** → POST request to `/cart/add` → Cart state updates → Navbar shows item count
4. **View cart** → Navigate to `/cart` → Fetches current cart → Displays items with quantities
5. **Modify cart** → Update quantities or remove items → Cart persists in MongoDB
6. **Checkout ready** → Cart items available for checkout process

## 🎯 Features & How They Work

### **Product Management**
- **Browse Products**: GET `/items` - Retrieves all products from MongoDB
- **Product Display**: Each product shows image, name, price, description, and "Add to Cart" button
- **Product Model**: 
  ```javascript
  {
    name: String,
    price: Number,
    description: String,
    image: String,
    category: String,
    inStock: Boolean
  }
  ```

### **Shopping Cart System**
- **Persistent Cart**: Single cart document in MongoDB that persists across sessions
- **Add Items**: POST `/cart/add` - Adds products with quantity validation
- **Update Quantities**: PUT `/cart/update/:id` - Modify item quantities
- **Remove Items**: DELETE `/cart/delete/:id` - Remove items from cart
- **Cart Summary**: Shows subtotal, total items, and individual item details

### **Real-time Updates**
- **Cart Badge**: Navbar shows live item count using React state
- **Cart Persistence**: Cart data stored in MongoDB, survives page refreshes
- **State Synchronization**: Frontend and backend stay in sync via API calls

## 🛠️ Technical Implementation

### **Backend API Endpoints**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/items` | Get all products |
| POST | `/items` | Create new product |
| GET | `/cart` | Get current cart |
| POST | `/cart/add` | Add item to cart |
| PUT | `/cart/update/:id` | Update cart item quantity |
| DELETE | `/cart/delete/:id` | Remove item from cart |

### **Database Models**
- **Product**: Stores product information
- **Cart**: Single document storing all cart items with embedded product references

### **Frontend Components**
- **Navbar**: Shows navigation and cart item count
- **ProductList**: Displays all products in grid layout
- **ProductCard**: Individual product display with add-to-cart functionality
- **CartPage**: Full cart view with item management
- **CartItem**: Individual cart item with quantity controls

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### **Installation**

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd mern-ecommerce
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your MongoDB URI and PORT
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm start
   ```

### **Environment Variables**
Create `.env` file in backend directory:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern_ecommerce
```

## 📱 Usage Guide

### **For Users**
1. **Browse Products**: Visit homepage to see all available products
2. **Add to Cart**: Click "Add to Cart" on any product
3. **View Cart**: Click cart icon in navbar to see your items
4. **Manage Cart**: Update quantities or remove items as needed
5. **Continue Shopping**: Use navigation to return to products

### **For Developers**
1. **Seed Database**: Run `node backend/seed.js` to populate sample products
2. **Test API**: Use Postman or similar tool to test endpoints
3. **Modify Products**: Use POST `/items` to add new products
4. **Customize Styling**: Edit TailwindCSS classes in frontend components

## 🔧 Development Features

- **Hot Reload**: Nodemon for backend, React Scripts for frontend
- **Error Handling**: Comprehensive error handling on both frontend and backend
- **Validation**: Input validation for cart operations
- **Responsive Design**: Mobile-friendly with TailwindCSS
- **Clean Architecture**: Separated concerns with MVC pattern

## 🧪 Testing

### **Backend Tests**
```bash
cd backend
node servver.js
```

### **Frontend Tests**
```bash
cd frontend
npm start
```

## 📝 Future Enhancements

- **User Authentication**: Login/registration system
- **Payment Integration**: Stripe or PayPal checkout
- **Order Management**: Order history and tracking
- **Product Reviews**: Customer ratings and reviews
- **Search & Filter**: Advanced product search
- **Admin Panel**: Product and order management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

For questions or support, please open an issue on GitHub or contact the development team.
