const express = require('express');
const router = express.Router();
const sharp = require('sharp');
const path = require('path');

// Home
router.get('/', async (req, res) => {
    const baseURL = `${req.protocol}://${req.get('host')}`;

    res.json({
        mensagem: "Bem-vindo à faces-api",
        instrucoes: `Para acessar, utilize: ${baseURL}/crop/{category}/{width}/{height}`,
        category: [
            '1 - woman',
            '2 - men'
        ],
        exemplo: `${baseURL}/1/200/300`
    });
});

// Get random image by gender
router.get('/:gender?/:width?/:height?', async (req, res) => {
    const gender = req.params.gender || 1;
    const width = req.params.width || 500;
    const height = req.params.height || 500;

    const GenderEnum = {
        1: "woman",
        2: "men",
        3: "other"
    };

    genderFolder = GenderEnum[gender] || 1;
    seedImages = 20;

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

module.exports = router;