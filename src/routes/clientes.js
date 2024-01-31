const { Router } = require('express');
const querys = require('../querys/querysClientes');

const router = Router();

//mostrar todos os clientes

router.get('/', async(req, res) => {
    const query = await querys.getAllClientes();
    return res.status(200).json(query);
});

//mostrar apenas um cliente

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const query = await querys.getClientesById(id);
    if(query.length === 0) {
        return res.status(400).json({message: 'Cliente not found!'});
    }
    return res.status(200).json(query);
});

//adicionar cliente

router.post('/', async (req, res) => {
    const {nome, idade, cidade } = req.body;
    const query = await querys.createCliente(nome, idade, cidade);
    return res.status(201).json(query);
});

//atualiza cliente

router.put('/', async (req, res) => {
    const {id, nome, idade, cidade } = req.body;
    const query = await querys.updateCliente(id, nome, idade, cidade);
    if(query === null){
        return res.status(400).json({message: "client not found"});
    }
    return res.status(200).json({message: "client actually successfully"});
})

router.delete('/', async (req, res) => {
    const { id } = req.body;
    const query = await querys.deleteCliente(id);
    if(query === null) {
        return res.status(400).json({message: 'Cliente not found!'});
    }
    return res.status(200).json({message: 'Cliente deleted sucessfully!'});
});


module.exports = router;