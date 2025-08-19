const mongoose = require('mongoose');
const Product = require('./models/Product');

// Sample products data
const products = [
  {
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    stock: 50,
    description: "Premium wireless headphones with noise cancellation"
  },
  {
    name: "Smart Watch",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    stock: 30,
    description: "Advanced smartwatch with health tracking features"
  },
  {
    name: "Laptop Stand",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    stock: 100,
    description: "Adjustable aluminum laptop stand for better ergonomics"
  },
  {
    name: "Mechanical Keyboard",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
    stock: 25,
    description: "RGB backlit mechanical keyboard with blue switches"
  },
  {
    name: "USB-C Cable",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbf1?w=500",
    stock: 200,
    description: "High-speed USB-C charging and data cable"
  },
  {
    name: "Gaming Mouse",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1527814050087-37919f79c2b4?w=500",
    stock: 40,
    description: "High-precision gaming mouse with customizable RGB"
  },
  {
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=500",
    stock: 75,
    description: "Portable speaker with deep bass and waterproof design"
  },
  {
    name: "4K Monitor",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    stock: 15,
    description: "Ultra HD monitor with vivid colors and thin bezels"
  },
  {
    name: "External Hard Drive",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1610465299996-9e3b5c008651?w=500",
    stock: 60,
    description: "1TB external hard drive with fast transfer speed"
  },
  {
    name: "Drone Camera",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e9a5e?w=500",
    stock: 10,
    description: "Compact drone with 4K camera and GPS tracking"
  },
  {
    name: "Smartphone Gimbal",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900d5?w=500",
    stock: 35,
    description: "3-axis gimbal stabilizer for smooth smartphone videos"
  },
  {
    name: "Noise Cancelling Earbuds",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1589891266805-5e3a65a0a6b2?w=500",
    stock: 80,
    description: "Wireless earbuds with active noise cancellation"
  },
  {
    name: "Fitness Tracker",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1526403220643-70a3c39c3d34?w=500",
    stock: 120,
    description: "Slim fitness tracker with heart rate monitor"
  },
  {
    name: "Smartphone Tripod",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500",
    stock: 90,
    description: "Lightweight tripod with flexible legs for smartphones"
  },
  {
    name: "Wireless Charger",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1600084095291-2a49856c2d09?w=500",
    stock: 150,
    description: "Fast wireless charging pad compatible with Qi devices"
  },
  {
    name: "Portable Projector",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1589820296152-5a4df1a005d9?w=500",
    stock: 12,
    description: "Mini projector with 1080p resolution and HDMI support"
  },
  {
    name: "VR Headset",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1606813909029-b0a0d71c77cd?w=500",
    stock: 20,
    description: "Immersive virtual reality headset with motion tracking"
  },
  {
    name: "Digital Camera",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1519183071298-a2962be96c56?w=500",
    stock: 14,
    description: "DSLR camera with interchangeable lenses and 24MP sensor"
  },
  {
    name: "Smart Light Bulb",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500",
    stock: 300,
    description: "Wi-Fi enabled smart bulb with voice control support"
  },
  {
    name: "Robot Vacuum",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1588776814546-7e0d0b85cbe5?w=500",
    stock: 18,
    description: "Self-charging robot vacuum with smart navigation"
  },
  {
    name: "Smart Thermostat",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1576502200916-3808e07386a5?w=500",
    stock: 28,
    description: "Energy-efficient thermostat with remote control"
  },
  {
    name: "Streaming Stick",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1614064642256-c8e820ad9b35?w=500",
    stock: 85,
    description: "4K streaming stick with voice control remote"
  },
  {
    name: "Action Camera",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1582719478250-74afad45f1cf?w=500",
    stock: 22,
    description: "Compact action camera with waterproof casing"
  },
  {
    name: "E-Reader",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1589820296152-5a4df1a005d9?w=500",
    stock: 50,
    description: "Lightweight e-reader with adjustable warm light"
  },
  {
    name: "Gaming Console",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1606813909029-b0a0d71c77cd?w=500",
    stock: 8,
    description: "Next-gen gaming console with ultra-fast load times"
  },
  {
    name: "Smart Glasses",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1549921296-3cf8620f6b48?w=500",
    stock: 15,
    description: "Augmented reality smart glasses with voice commands"
  },
  {
    name: "Portable Power Bank",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900d5?w=500",
    stock: 110,
    description: "High-capacity 20000mAh power bank with fast charging"
  },
  {
    name: "Smart Lock",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1574691252257-72a98a4d1e6f?w=500",
    stock: 32,
    description: "Keyless smart lock with mobile app control"
  },
  {
    name: "Electric Kettle",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c5d?w=500",
    stock: 70,
    description: "Stainless steel electric kettle with auto shut-off"
  },
  {
    name: "Coffee Maker",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
    stock: 45,
    description: "Programmable coffee maker with thermal carafe"
  },
  {
    name: "Air Fryer",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1590080876176-bc7b1f1c3e0e?w=500",
    stock: 38,
    description: "Oil-free air fryer with digital temperature control"
  },
  {
    name: "Smart Scale",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1589367920961-1e4edb1bb7d1?w=500",
    stock: 95,
    description: "Bluetooth smart scale with body composition tracking"
  },
  {
    name: "Smart Plug",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1621905252475-7f2b0b54db37?w=500",
    stock: 250,
    description: "Voice-controlled smart plug for appliances"
  },
  {
    name: "Electric Scooter",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500",
    stock: 10,
    description: "Foldable electric scooter with 25km range"
  }
];


// Connect to MongoDB and seed data
const seedDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mern_ecommerce', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log('Connected to MongoDB');
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert sample products
    await Product.insertMany(products);
    console.log('Sample products inserted successfully');
    
    console.log('Database seeded! You can now visit localhost:3000 to see the products.');
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
