const mongoose = require('mongoose');
const express = require('express');
const requireDir = require('require-dir');
const cors = require('cors');

//iniciando o app
const app = express();
//permitir envio de dados no forato de json 
app.use(express.json());
//permitir que outro endereços acessem a aplicação ("basico da lib")
app.use(cors());

//iniciando db
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 

requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes'));

app.listen(3005);