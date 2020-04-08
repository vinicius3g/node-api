const mongoose = require('mongoose');
const express = require('express');
const requireDir = require('require-dir');

//iniciando o app
const app = express();

//iniciando db
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 

requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes'));

app.listen(3005);