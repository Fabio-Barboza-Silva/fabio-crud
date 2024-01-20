const connection = require('../connection');
const { getActorsById } = require('./querysActors');

const getAllClientes = async () => {
    const [query] = await connection.execute(`SELECT * FROM sakila.cliente`);
    return query;
}

const getClientesById = async (id) => {
    const [query] = await connection.execute(`SELECT * FROM sakila.cliente WHERE
    cliente_id = ?`, [id]);
    return query;
}

const createCliente = async (nome, idade, cidade) => {
    const [query] = await connection.execute(`INSERT INTO sakila.cliente (nome, idade, 
    cidade) VALUES (?, ?, ?)`, [nome, idade, cidade]);
    const item = await getClientesById(query.insertId);
    return item;
}

const updateCliente = async (id, nome, idade, cidade) => {
    const item = await getClientesById(id);
    if(item.length ===0){
        return null;
    }
    const [query] = await connection.
    execute(`UPDATE sakila.cliente 
    SET nome = ?, idade = ?, cidade = ? 
    WHERE cliente_id = ?;`, [nome, idade, cidade, id]);        
        return query;
}

const deleteCliente = async (id) => {
    const item = await getClientesById(id);
    if(item.length ===0){
        return null;
    }    
    const [query] = await connection.
    execute(`DELETE FROM sakila.cliente     
    WHERE cliente_id = ?;`, [id]);        
    return query;

}
module.exports = { getAllClientes, getClientesById, createCliente, updateCliente, deleteCliente }

