require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota simples
app.get('/:gender?/:width?/:height?', (req, res) => {
    const gender = req.params.gender || 1;
    const width = req.params.width || 500;
    const height = req.params.height || 500;

    res.json({
        recebido: { gender, width, height },
        message: 'API funcionando!'
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
