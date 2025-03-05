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
exports.getImageWithGender = async (req, res) => {
    try {
        const { gender, width, height } = req.params;
        const genderFolder = genderEnum[gender];
        const imagePath = getImagePath(genderFolder);

        const croppedImage = await cropImage(imagePath, width, height);

        res.set('Content-Type', 'image/jpeg');
        res.send(croppedImage);
    } catch (error) {
        console.error("Gender Image - Erro ao processar a imagem:", error.message);
        if (!res.headersSent) {
            return res.status(500).json({ erro: 'Gender Image - Erro ao processar a imagem', detalhe: error.message });
        }
    }
};

exports.getRandomImage = async (req, res) => {
    try {
        const { width, height } = req.params;
        const genderFolder = genderEnum[utils.randomNumber(1, 3)];
        const imagePath = getImagePath(genderFolder);

        const croppedImage = await cropImage(imagePath, width, height);

        res.set('Content-Type', 'image/jpeg');
        res.send(croppedImage);
    } catch (error) {
        console.error("Random Image - Erro ao processar a imagem:", error.message);
        if (!res.headersSent) {
            return res.status(500).json({ erro: 'Random Image - Erro ao processar a imagem', detalhe: error.message });
        }
    }
};


function getImagePath(gender = 1, id = utils.randomNumber(1, seedImages)) {
    return path.join(`public/${gender}`, `/${id}.png`);
}

function cropImage(imagePath, width = 500, height = 500) {
    return sharp(imagePath).resize(parseInt(width), parseInt(height)).toBuffer();
}