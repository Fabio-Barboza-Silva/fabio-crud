const { Router } = require('express');
const querys = require('../querys/querysAlunos');

const router = Router();

//mostrar alunos

router.get('/', async (req, res) => {
    const query = await querys.getAllAlunos();
    return res.status(200).json(query);
});

//Adicionar aluno

router.post('/', async (req, res) => {
    const { nome, idade } = req.body;
    const query = await querys.createAluno(nome, idade);
    return res.status(200).json(query);
})

//atualizar aluno

router.put('/', async (req, res) => {
    const { id, nome, idade } = req.body;
    const query = await querys.updateAluno(id, nome, idade);
    if (query == null) {
        return res.status(400).json({ message: 'Aluno not found' });
    }
    return res.status(200).json({ message: 'Aluno registered sucessfully' });
})

//deleta aluno

router.delete('/', async (req, res) => {
    const { id } = req.body;
    const query = await querys.deleteAluno(id);
    if (query == null) {
        return res.status(400).json({ message: 'Aluno not found' });
    }
    return res.status(200).json({ message: 'Aluno deleted sucessfully' });
})


module.exports = router;