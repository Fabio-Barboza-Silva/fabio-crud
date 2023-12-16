const express = require('express')
const server = express()
server.use(express.json())

const users = [];

// como servidor puxe da rota usuarios com uma requisição esperando a resposta e o que geralmente esperando como resposta algo
server.get('/users',(req, res) => {
    return res.json(users)
})

server.get('/users/:index',(req, res) => {
    return res.json(req.user)
})

server.post('/users',(req, res) => {
    const { name } = req.body
    users.push( name )
    return res.json(users)
})

server.put('/users/:index', (req, res) => {
    const { index } = req.params; // recupera o index com os dados
    const { name } = req.body;
    
    users[index] = name; // sobrepõe o index obtido na rota de acordo com o novo valor
    
    return res.json(users);
})

    server.delete('/users/:index', (req, res) => {
        const { index } = req.params; // recupera o index com os dados
        
        users.splice(index, 1); // percorre o vetor até o index selecionado e deleta uma posição no array
        
        return res.send();
        });


server.listen(3000)