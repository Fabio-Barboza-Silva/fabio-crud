const connection = require('../connection');

const getAllAlunos = async () => {
    const [query] = await connection.execute('SELECT * FROM sakila.aluno');
    return query;
}

const getAlunosById = async (id) => {
    const [query] = await connection.execute(`SELECT * FROM sakila.aluno WHERE aluno_id = ?`, [id]);
    return query;
}

const createAluno = async (nome, idade) => {
    const [query] = await connection.execute(`INSERT INTO sakila.aluno (nome, idade)
    VALUES (?, ?)`, [nome, idade]);
    const item = await getAlunosById(query.insertId);
    return item;
}

const updateAluno = async(id, nome, idade) => {
    const item = await getAlunosById(id);
    if(item.length === 0){
        return null;
    }
    const [query] = await connection.execute(`UPDATE
        sakila.aluno SET nome = ?, idade = ? WHERE aluno_id = ?;`, [nome, idade, id]);
        return query;
}

const deleteAluno = async(id) => {
    const item = await getAlunosById(id);
    if(item.length == 0){
    return null;
    }           
    const [query] = await connection.execute(`DELETE FROM sakila.aluno WHERE aluno_id = ?;`, [id]);
    return query;
}
module.exports = {getAllAlunos, createAluno, updateAluno, deleteAluno};
