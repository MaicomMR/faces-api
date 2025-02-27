const { param, validationResult } = require('express-validator');

exports.validateCropParams = [

    param('width').isInt({ min: 200 }).withMessage('Width must be an integer greater than 200'),
    param('height').isInt({ min: 200 }).withMessage('Height must be an integer greater than 200'),

    validatorHandler
];

exports.validateGender = [
    param('gender').isInt({ min: 1, max: 2 }).withMessage('Geight must be 1 or 2'),
];


function validatorHandler(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ erro: errors.array() });
        }
        next();
}