// controllers/imageController.js
const path = require('path');
const fs = require('fs/promises');
const sharp = require('sharp');
const utils = require('../utils/utils');

const GENDERS = { 1: 'men', 2: 'woman', 3: 'other' };
const SEED_IMAGES = 20;
const DEFAULT_SIZE = 500;

// -------- helpers --------
function parsePositiveInt(value, fallback) {
  const n = Number.parseInt(value, 10);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

function randomImageId(max = SEED_IMAGES) {
  return utils.randomNumber(1, max);
}

function buildImagePath(folder, id) {
  // evita "/" inicial que quebrava o path.join
  return path.join(__dirname, '..', 'public', folder, `${id}.png`);
}

async function ensureFileExists(filePath) {
  await fs.access(filePath);
  return filePath;
}

async function cropImage(imagePath, width = DEFAULT_SIZE, height = DEFAULT_SIZE) {
  // mantém PNG (origem .png) e corrige Content-Type
  return sharp(imagePath)
    .resize({ width, height, fit: 'cover' })
    .png()
    .toBuffer();
}

async function serveImage(res, folder, width, height) {
  const id = randomImageId();
  const imagePath = await ensureFileExists(buildImagePath(folder, id));
  const buffer = await cropImage(imagePath, width, height);
  res.type('png').send(buffer);
}

// -------- handlers --------
exports.getImageWithGender = async (req, res) => {
  try {
    const { gender, width, height } = req.params;
    const folder = GENDERS[Number(gender)];
    if (!folder) return res.status(400).json({ erro: 'Gênero inválido. Use 1, 2 ou 3.' });

    const w = parsePositiveInt(width, DEFAULT_SIZE);
    const h = parsePositiveInt(height, DEFAULT_SIZE);

    await serveImage(res, folder, w, h);
  } catch (error) {
    console.error('Gender Image - Erro:', error.message);
    if (!res.headersSent) res.status(500).json({ erro: 'Gender Image - Erro ao processar a imagem', detalhe: error.message });
  }
};

exports.getRandomImage = async (req, res) => {
  try {
    const { width, height } = req.params;
    const folder = GENDERS[utils.randomNumber(1, 3)];

    const w = parsePositiveInt(width, DEFAULT_SIZE);
    const h = parsePositiveInt(height, DEFAULT_SIZE);

    await serveImage(res, folder, w, h);
  } catch (error) {
    console.error('Random Image - Erro:', error.message);
    if (!res.headersSent) res.status(500).json({ erro: 'Random Image - Erro ao processar a imagem', detalhe: error.message });
  }
};
