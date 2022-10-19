const express = require('express');
const app = express();

app.get('/' , (req,res) => {
    console.log(req.query);
    res.json({mensagem: 'parametro recebido'});
});

app.listen(8080, () => {
    console.log('servior node iniciado');
});