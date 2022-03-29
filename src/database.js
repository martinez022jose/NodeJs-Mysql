const mysql = require('mysql2/promise');
const axios = require('axios');

const pool = mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'',
    port: 3306,
    database:'nodeJs_Mysql'
});

const getUsers = async () => {
    const sql = 'SELECT * FROM usuarios';
    const [ result ] =  await pool.query(sql);
    return result;
}

const getUser = async (idUsuario) => {
    const sql = `SELECT *FROM usuarios WHERE idUsuario = ${idUsuario}`
    const [ result ] = await pool.query(sql);
    return result;
}

const addUser = async (idUsuario, nombre, apellido, edad, direccion)=>{
    const sql = `INSERT INTO usuarios(idUsuario, nombre, apellido, edad, direccion) VALUES ('${idUsuario}', '${nombre}', '${apellido}', '${edad}', '${direccion}')`;
    const [ result ] =  await pool.query(sql);
    return result.affectedRows;
}

const updateUserField = async (idUsuario, field, valueNew) => {
    const sql = `UPDATE usuarios SET ${field} = '${valueNew}' WHERE idUsuario = '${idUsuario}'`
    const [ result ]= await pool.query(sql);
    return result.affectedRows;
}

const deleteUser = async (idUsuario) => {
    const sql = `DELETE FROM usuarios WHERE idUsuario = '${idUsuario}'`;
    const [ result ]= await pool.query(sql);
    return result.affectedRows;
}

module.exports = {getUsers, addUser, getUser, updateUserField, deleteUser};