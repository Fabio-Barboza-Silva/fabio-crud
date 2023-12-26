const express = require('express');
const actors = require('./routes/actors');

const app = express();

app.use(express.json());

const PORT = 3302;

app.use('/actors', actors);

app.listen(PORT, () => {
    console.log(`executando a aplicação na porta ${PORT}`);
});