const axios = require('axios');

const getUsers =  async (req, res) => {
    try{
        const users = await axios.get('http://localhost:3000/users', {
            contentType: 'json'
        });

        res.json(users.data);
        
    }catch(err){
        console.log(err);
    }
}

const getUser = async (req, res) => {
    try{
        const { id } = req.params;
        const users = await axios.get('http://localhost:3000/users', {
          contentType: 'json'
        });
        res.json(users.data.filter(element => JSON.parse(JSON.stringify(element)).id == id));
   
    }catch(err){
        console.log(err);
    }
}

const addUser = async (req, res) => {
    try{
        const user = req.body;
        const response = await axios.post('http://localhost:3000/users', user);
        res.json(response.data);
    }catch(err){
        console.log(err);
    }
}

const updateUser = async (req, res) => {
    try{
        const userUpdate = req.body;
        const { id } = req.params;
        const response = await axios.put(`http://localhost:3000/users/${id}`, userUpdate)
        
        res.json(response.data);
    }catch(err){
        console.log(err);
    }   
}

const deleteUser = async (req, res) => {
    try{
        const { id } = req.params;
        const response = await axios.delete(`http://localhost:3000/users/${id}`);
        res.json(response.data);
    }catch(err){
        console.log(err);
    }
}

module.exports = {getUsers, getUser, updateUser, deleteUser, addUser}