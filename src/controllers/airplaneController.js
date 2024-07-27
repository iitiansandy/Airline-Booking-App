const { AirplaneService } = require('../services');
const { StatusCodes } = require('http-status-codes');

const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * 
 * @param {*} req : { modelNumber: req.body.modelNumber, capacity: req.body.capacity }
 * @param {*} res 
 */

async function createAirplane(req, res) {
    try {
        // console.log(req.body);
        // console.log("Inside airplane controller");
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });

        SuccessResponse.data = airplane;

        return res.status(StatusCodes.CREATED).send({SuccessResponse});

    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).send({ErrorResponse});
    }
};


async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).send({SuccessResponse});
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).send({ErrorResponse});
    }
}

module.exports = {
    createAirplane,
    getAirplanes
}