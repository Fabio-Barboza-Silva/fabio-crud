const { Router } = require('express');
const querys = require('../querys/querysVizinhos');

const router = Router();

//mostrar vizinhos

router.get('/', async (req, res) => {
    const query = await querys.getAllVizinhos();
    return res.status(200).json(query);
})

//adicionar vizinho

router.post('/', async (req, res) => {
    const { nome, endereco, bairro } = req.body;
    const query = await querys.createVizinho(nome, endereco, bairro);
    return res.status(200).json(query);
})

//atualizar vizinho

router.put('/', async (req, res) => {
    const { id, nome, endereco, bairro } = req.body;
    const query = await querys.updateVizinho(id, nome, endereco, bairro);
    if (query == null) {
        return res.status(400).json({ message: 'vizinho not found' });
    }
    return res.status(200).json({ message: 'Vizinho registered sucessfully' });
})


// deleta vizinho

router.delete('/', async (req, res) => {
    const { id } = req.body;
    const query = await querys.deleteVizinho(id);
    if (query == null) {
        return res.status(400).json({ message: 'vizinho not found' });
    }
    return res.status(200).json({ message: 'Vizinho deleted sucessfully' });
})

module.exports = router;