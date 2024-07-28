const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if (!req.body.flightNumber) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        
        ErrorResponse.error = new AppError(['Flight number not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).send({ErrorResponse});
    };

    if (!req.body.airplaneId) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        
        ErrorResponse.error = new AppError(['Airplane Id not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).send({ErrorResponse});
    };

    if (!req.body.departureAirportId) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        
        ErrorResponse.error = new AppError(['Departure airport Id not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).send({ErrorResponse});
    };

    if (!req.body.arrivalAirportId) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        
        ErrorResponse.error = new AppError(['Arrival airport Id not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).send({ErrorResponse});
    };

    if (!req.body.arrivalTime) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        
        ErrorResponse.error = new AppError(['Arrival time not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).send({ErrorResponse});
    };

    if (!req.body.departureTime) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        
        ErrorResponse.error = new AppError(['Departure time not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).send({ErrorResponse});
    };

    if (!req.body.price) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        
        ErrorResponse.error = new AppError(['Price not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).send({ErrorResponse});
    };

    if (!req.body.totalSeats) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        
        ErrorResponse.error = new AppError(['Total seats found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).send({ErrorResponse});
    };
    next();
};

module.exports = {validateCreateRequest};