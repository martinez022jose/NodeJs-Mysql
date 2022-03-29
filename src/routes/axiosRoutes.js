const { Router } = require('express');
const { getUsers, addUser, getUser, updateUser, deleteUser} = require('../controllers/axiosController');
const router = Router();

router.get('/get-users', getUsers);

router.get('/get-user/:id', getUser);

router.post('/add-user', addUser);

router.put('/update-user/:id', updateUser);

router.delete('/delete-user/:id', deleteUser);

module.exports = router;