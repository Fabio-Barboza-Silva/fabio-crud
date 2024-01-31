const connection = require('../connection');


const getAllUsuarios = async () => {
    const [query] = await connection.execute('SELECT * FROM sakila.usuario');
    return query;
}

const getUsuariosById = async (id) => {
    const[query] = await connection.execute(`SELECT * FROM sakila.usuario WHERE usuario_id = ?`, [id]);
    return query;
}

const createUsuario = async(nome, telefone, idade, endereco) => {
    const[query] = await connection.execute(`INSERT INTO sakila.usuario (nome, telefone, idade, endereco) VALUES (?, ?, ?, ?)`, [nome, telefone, idade, endereco]);
    const item = await getUsuariosById(query.insertId);
    return item;
}

const updateUsuario = async (id, nome, telefone, idade, endereco) => {
    const item = await getUsuariosById(id);
    if(item.length == 0){
        return null;
    }
    const [query] = await connection.execute(`UPDATE sakila.usuario SET nome = ?, telefone = ?, idade = ?, endereco = ? WHERE usuario_id = ?;`, [nome, telefone, idade, endereco, id]);
    return query;
}

const deleteUsuario = async (id) => {
    const item = await getUsuariosById(id);
    if(item.length == 0){
        return null;
    }
    const [query] = await connection.execute(`DELETE FROM sakila.usuario WHERE usuario_id = ?;`, [id]);
    return query;
}

module.exports = {getAllUsuarios, createUsuario, updateUsuario, deleteUsuario};