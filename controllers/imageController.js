const sharp = require('sharp');
const path = require('path');
const requestValidator = require('../middlewares/requestValidator')
const utils = require('../utils/utils')

const genderEnum = {
    1: "men",
    2: "woman",
    3: "other"
};

const seedImages = 20;

// Lógica da rota de crop de imagem
exports.getImage = async (req, res) => {
    try {
        const { gender, width, height } = req.params;
        const genderFolder = genderEnum[gender];
        const imagePath = path.join(`public/${genderFolder}`, `${utils.randomNumber(1, seedImages)}.png`);

        const croppedImage = await sharp(imagePath)
            .resize(parseInt(width), parseInt(height))
            .toBuffer();

        res.set('Content-Type', 'image/jpeg');
        res.send(croppedImage);
    } catch (error) {
        console.error("Erro ao processar a imagem:", error.message);
        if (!res.headersSent) {
            return res.status(500).json({ erro: 'Erro ao processar a imagem', detalhe: error.message });
        }
    }
};

exports.getRandomImage = async (req, res) => {
    try {
        return res.json({ WIP: 'Work in Progress'});
    } catch (error) {
        console.error("Erro ao processar a imagem:", error.message);
        if (!res.headersSent) {
            return res.status(500).json({ erro: 'Erro ao processar a imagem', detalhe: error.message });
        }
    }
};
