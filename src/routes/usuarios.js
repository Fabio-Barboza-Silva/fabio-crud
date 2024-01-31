const { Router } = require('express');
const querys = require('../querys/querysUsuarios');

const router = Router();

//Mostrar Usuários

router.get('/', async (req, res) => {
    const query = await querys.getAllUsuarios();
    return res.status(200).json(query);
});

//Adiciona usuario

router.post('/', async (req, res) => {
    const { nome, telefone, idade, endereco} = req.body;
    const query = await querys.createUsuario(nome, telefone, idade, endereco);
    return res.status(201).json(query);
})

//Atualiza Usuario

router.put('/', async(req, res) => {
    const {id, nome, telefone, idade, endereco} = req.body;
    const query = await querys.updateUsuario(id, nome, telefone, idade, endereco);
    if(query == null) {
        return res.status(400).json({ message: 'Usuário not found!'});
    }
    return res.status(200).json({ message: 'Usuário registered sucessfully' });
})

//Deleta Usuario

router.delete('/', async(req, res) => {
    const {id} = req.body;
    const query = await querys.deleteUsuario(id);
    if(query == null) {
        return res.status(400).json({ message: 'User not found'});
    }
    return res.status(200).json({ message: 'User deleted sucessfully'});
})

module.exports = router;