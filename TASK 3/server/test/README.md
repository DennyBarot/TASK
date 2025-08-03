# Testing Guide

## Running Tests

To run all tests:

```bash
npm test
```

To run tests in watch mode:

```bash
npm test -- --watch
```

To collect coverage:

```bash
npm test -- --coverage
```

## Test Structure

- `userController.test.js` - Tests for user controller functions
- `setup.js` - Test setup and configuration
- `jest.config.js` - Jest configuration

## What's Tested

1. User creation with validation
2. User retrieval with filtering
3. User update functionality
4. User deletion functionality

Each function is tested for both success cases and error handling.
