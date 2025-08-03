const axios = require('axios');

// Test the API endpoints
const baseURL = 'http://localhost:5000/api/users';

async function testAPI() {
  try {
    console.log('Testing API endpoints...\n');

    // Test creating a user
    console.log('1. Creating a user...');
    const createUserResponse = await axios.post(baseURL, {
      name: 'Test User',
      email: 'test@example.com',
      age: 25,
      role: 'user'
    });
    console.log('Create user response:', createUserResponse.data);
    const userId = createUserResponse.data._id;
    
    // Test getting users
    console.log('\n2. Getting users...');
    const getUsersResponse = await axios.get(baseURL);
    console.log('Get users response:', getUsersResponse.data);
    
    // Test updating a user
    console.log('\n3. Updating user...');
    const updateUserResponse = await axios.put(`${baseURL}/${userId}`, {
      name: 'Updated Test User',
      age: 26
    });
    console.log('Update user response:', updateUserResponse.data);
    
    // Test deleting a user
    console.log('\n4. Deleting user...');
    const deleteUserResponse = await axios.delete(`${baseURL}/${userId}`);
    console.log('Delete user response:', deleteUserResponse.data);
    
    console.log('\nAll tests passed!');
  } catch (error) {
    console.error('Test failed:', error.response?.data || error.message);
  }
}

testAPI();
