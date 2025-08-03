// Set environment variables for testing
process.env.NODE_ENV = 'test';
process.env.MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/testdb';

// Mock console.log to reduce test output noise
jest.spyOn(console, 'log').mockImplementation(() => {});
