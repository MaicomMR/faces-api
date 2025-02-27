const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController')
const homeController = require('../controllers/homeController')

router.get('/', homeController.getHome);
router.get('/random/:width?/:height?', imageController.getRandomImage);
router.get('/:gender?/:width?/:height?', imageController.getImage);

module.exports = router;