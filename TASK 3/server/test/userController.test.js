const mongoose = require('mongoose');
const User = require('../models/userModel');
const { createUser, getUsers, updateUser, deleteUser } = require('../controllers/usercontroller');

// Mock request and response objects
const mockRequest = (body = {}, params = {}, query = {}) => ({
  body,
  params,
  query
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('User Controller', () => {
  // Connect to MongoDB before running tests
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/testdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  // Clear database after each test
  afterEach(async () => {
    await User.deleteMany({});
  });

  // Close database connection after all tests
  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const req = mockRequest({
        name: 'John Doe',
        email: 'john@example.com',
        age: 30,
        role: 'user'
      });
      const res = mockResponse();

      await createUser(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalled();
    });

    it('should return 400 if required fields are missing', async () => {
      const req = mockRequest({
        name: 'John Doe',
        email: 'john@example.com'
        // age is missing
      });
      const res = mockResponse();

      await createUser(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
    });
  });

  describe('getUsers', () => {
    it('should get all users', async () => {
      // Create a test user first
      await User.create({
        name: 'John Doe',
        email: 'john@example.com',
        age: 30,
        role: 'user'
      });

      const req = mockRequest();
      const res = mockResponse();

      await getUsers(req, res);

      expect(res.json).toHaveBeenCalled();
      // Check that the response contains an array
      const responseArray = res.json.mock.calls[0][0];
      expect(Array.isArray(responseArray)).toBe(true);
    });
  });

  describe('updateUser', () => {
    it('should update an existing user', async () => {
      // Create a test user first
      const user = await User.create({
        name: 'John Doe',
        email: 'john@example.com',
        age: 30,
        role: 'user'
      });

      const req = mockRequest(
        { name: 'Jane Doe' }, // updated data
        { id: user._id } // params
      );
      const res = mockResponse();

      await updateUser(req, res);

      expect(res.json).toHaveBeenCalled();
      // Check that the name was updated
      const responseUser = res.json.mock.calls[0][0];
      expect(responseUser.name).toBe('Jane Doe');
    });

    it('should return 404 if user not found', async () => {
      const req = mockRequest(
        { name: 'Jane Doe' },
        { id: '507f1f77bcf86cd799439011' } // non-existent ID
      );
      const res = mockResponse();

      await updateUser(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });

  describe('deleteUser', () => {
    it('should delete an existing user', async () => {
      // Create a test user first
      const user = await User.create({
        name: 'John Doe',
        email: 'john@example.com',
        age: 30,
        role: 'user'
      });

      const req = mockRequest(
        {},
        { id: user._id } // params
      );
      const res = mockResponse();

      await deleteUser(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    it('should return 404 if user not found', async () => {
      const req = mockRequest(
        {},
        { id: '507f1f77bcf86cd799439011' } // non-existent ID
      );
      const res = mockResponse();

      await deleteUser(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});
