const axios = require('axios');

const getUsers =  () => {
    return axios.get('http://localhost:3000/users', {
     contentType: 'json'
   })
   .then(res => res.data)
   .catch(err => {console.log(err)})

}

const getUser = (id) => {
    return axios.get('http://localhost:3000/users', {
     contentType: 'json'
   })
   .then(res => {return res.data.filter (element => JSON.parse(JSON.stringify(element)).id == id)})
   .catch(err => {console.log(err)});

}

const addUser = (user) => {
    return axios.post('http://localhost:3000/users', user)
    .then(res => res.data)
    .catch(err => {console.log(err)});
}

const updateUserField = (id, userUpdate) => {
    return axios.put(`http://localhost:3000/users/${id}`, userUpdate)
    .then(res =>res.data)
    .catch(err => {console.log(err)}); 
}

const deleteUser = (id) => {
    return axios.delete(`http://localhost:3000/users/${id}`)
    .then(res => res.data)
    .catch(err => {console.log(err)});
}

module.exports = {getUsers, getUser, updateUserField, deleteUser, addUser}