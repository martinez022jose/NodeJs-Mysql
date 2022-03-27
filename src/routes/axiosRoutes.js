const { Router } = require('express');
const data = require('../public/database.json');
const { getUsers, addUser, getUser, updateUserField, deleteUser} = require('../axios/axios');
const router = Router();

router.get('/', async (req, res)=> {
    res.json(data);
});

router.get('/get-users', async (req, res) => {
    res.send( await getUsers());
});

router.get('/get-user/:id', async (req, res) => {
    const { id } = req.params;
    res.json(await getUser(id));
})

router.post('/add-user', async (req, res) => {
    const user = req.body;
    res.json(await addUser(user));
})

router.put('/update-user/', async (req, res) => {
    const userUpdate = req.body;
    const { id } = req.body;
    res.json( await updateUserField(id, userUpdate));
})


router.delete('/delete-user/:id', async (req, res) => {
    const { id } = req.params;
    res.json( await deleteUser(id));
})

module.exports = router;