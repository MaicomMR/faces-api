require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const sharp = require('sharp');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota simples
app.get('/:gender?/:width?/:height?', async (req, res) => {
    const gender = req.params.gender || 1;
    const width = req.params.width || 500;
    const height = req.params.height || 500;

    const GenderEnum = {
        1: "woman",
        2: "men",
        3: "other"
    };
    
    genderFolder = GenderEnum[gender] || 1;
    seedImages = 4;
    
    // res.json({genderFolder});

    try {
        const imagePath = path.join(`public/${genderFolder}`, `${Math.floor(Math.random() * seedImages) + 1}.png`);

        // Processar a imagem
        const croppedImage = await sharp(imagePath)
            .resize(parseInt(width), parseInt(height))
            .toBuffer();

        res.set('Content-Type', 'image/jpeg');
        res.send(croppedImage);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao processar a imagem', detalhe: error.message });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
