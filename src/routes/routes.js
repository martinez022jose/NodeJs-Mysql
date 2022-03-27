const { Router } = require('express');
const { getUsers, addUser, getUser, updateUserField, deleteUser} = require('../database');
const router = Router();

router.get('/', async (req, res) => {
    try{
        const users = await getUsers();
        if(!users){
            throw new Error('err getUsers');
        }

        res.json(users);
    }catch(err){
        console.log(err)
    }
});

router.get('/get-user/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const [ result ] = await getUser(id);
        if(!result){
            throw new Error(`No existe usuario con determinado id ${id}`);
        }

        res.json(result);
    }catch(err){
        console.log(err);
    }
});

router.post('/add-user/', async (req, res) => {
    const { idUsuario, nombre, apellido, edad, direccion } = req.body;
    try{
        const result = await addUser(idUsuario, nombre, apellido, edad, direccion);
        if (result === 0){
            throw new Error(`No se puede agregar usuario ${nombre} ${apellido}, idUsuario duplicado`);
        }

        res.json(result);
    }catch(err){
        console.log(err);
    }
    
});

router.put('/update-user-field/:idUser/:field/:valueNew', async (req, res) => {
    const {idUser, field, valueNew} = req.params;
    try{
        const result = await updateUserField(idUser, field, valueNew);
        if (result === 0){
            throw new Error(`No se pudo actualizar registro ${idUser}`);
        }

        res.json(result);
    }catch(err){
        console.log(err);
    }
});

router.delete('/delete-user/:idUser', async (req, res) => {
    const {idUser} = req.params;
    try{
        const result = await deleteUser(idUser);
        if (result === 0){
            throw new Error(`No se pudo eliminar registro ${idUser}`);
        }

        res.json(result);
    }catch(err){
        console.log(err);
    }
});

module.exports = router;