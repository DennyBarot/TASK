const express = require('express');
const { createUser, getUsers, updateUser, deleteUser } = require('../controllers/usercontroller.js');

const router = express.Router();

router.route('/').post(createUser).get(getUsers);
router.route('/:id').put(updateUser).delete(deleteUser);

module.exports = router;
