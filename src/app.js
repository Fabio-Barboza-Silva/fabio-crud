const express = require('express');
const actors = require('./routes/actors');
const alunos = require('./routes/alunos');


const app = express();

app.use(express.json());

const PORT = 3302;

app.use('/actors', actors);
app.use('/alunos', alunos);


app.listen(PORT, () => {
    console.log(`executando a aplicação na porta ${PORT}`);
});