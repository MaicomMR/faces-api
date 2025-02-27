const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController')
const homeController = require('../controllers/homeController')
const validator = require('../middlewares/requestValidator')

router.get('/', homeController.getHome);
router.get('/random/:width?/:height?', imageController.getRandomImage);
router.get('/:gender?/:width?/:height?', validator.validateGender, validator.validateCropParams, imageController.getImage);

module.exports = router;