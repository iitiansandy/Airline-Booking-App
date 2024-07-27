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


/**
 * 
 * @param {*} req /airplanes/:id
 * @param {*} res 
 * @returns 
 */
async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).send({SuccessResponse});
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).send({ErrorResponse});
    }
};


async function getAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).send({SuccessResponse});
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).send({ErrorResponse});
    }
};

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane
}