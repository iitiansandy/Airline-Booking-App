const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if (!req.body.name) {
        ErrorResponse.message = 'Something went wrong while creating airplane';
        
        ErrorResponse.error = new AppError(['Airport name not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).send({ErrorResponse});
    };

    if (!req.body.code) {
        ErrorResponse.message = 'Something went wrong while creating airplane';
        
        ErrorResponse.error = new AppError(['Airport code not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).send({ErrorResponse});
    };

    if (!req.body.cityId) {
        ErrorResponse.message = 'Something went wrong while creating airplane';
        
        ErrorResponse.error = new AppError(['Airport cityId not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).send({ErrorResponse});
    };
    next();
};

module.exports = {validateCreateRequest};