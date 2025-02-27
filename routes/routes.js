const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController')
const homeController = require('../controllers/homeController')
const validator = require('../middlewares/requestValidator')

router.get('/', homeController.getHome);
router.get('/random/:width?/:height?', validator.validateCropParams, imageController.getRandomImage);
router.get('/:gender?/:width?/:height?', validator.validateGender, validator.validateCropParams, imageController.getImageWithGender);

module.exports = router;