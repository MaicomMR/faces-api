const { param, validationResult } = require('express-validator');

const minWidth = 200;
const maxWidth = 2000;
const minHeight = 200;
const maxHeight = 2000;

exports.validateCropParams = [

    param('width')
        .isInt({ min: minWidth, max: maxWidth })
        .withMessage(`Width must be an integer between ${minWidth} and ${maxWidth}`),

    param('height')
        .isInt({ min: minHeight, max: maxHeight })
        .withMessage(`Height must be an integer between ${minHeight} and ${maxHeight}`),

    validatorHandler
];

exports.validateGender = [
    param('gender').isInt({ min: 1, max: 3 }).withMessage('Geight must be 1 or 3'),
];


function validatorHandler(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ erro: errors.array() });
        }
        next();
}