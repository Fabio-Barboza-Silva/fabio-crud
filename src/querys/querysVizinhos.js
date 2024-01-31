const connection = require('../connection');

const getAllVizinhos = async () => {
    const [query] = await connection.execute('SELECT * FROM sakila.vizinho');
    return query;
}

const getVizinhosById = async (id) => {
    const [query] = await connection.execute(`SELECT * FROM sakila.vizinho WHERE vizinho_id = ?`, [id]);
    return query;
}

const createVizinho = async (nome, endereco, bairro) => {
    const [query] = await connection.execute(`INSERT INTO sakila.vizinho (nome, endereco, bairro) VALUES (?, ?, ?)`, [nome, endereco, bairro]);
    const item = await getVizinhosById(query.insertId);
    return item;
}

const updateVizinho = async (id, nome, endereco, bairro) => {
    const item = await getVizinhosById(id);
    if (item.length === 0) {
        return null;
    }
    const [query] = await connection.execute(`UPDATE sakila.vizinho SET nome = ?, endereco = ?, bairro = ? WHERE vizinho_id = ?;`, [nome, endereco, bairro, id]);
    return query;
}

const deleteVizinho = async (id) => {
    const item = await getVizinhosById(id);
    if (item.length == 0) {
        return null;
    }
    const [query] = await connection.
    execute(`DELETE FROM 
    sakila.vizinho WHERE vizinho_id = ?;`, [id]);
    return query;
}

module.exports = { getAllVizinhos, createVizinho, updateVizinho, deleteVizinho };