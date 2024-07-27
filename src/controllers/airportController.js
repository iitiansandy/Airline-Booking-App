const { AirportService } = require('../services');
const { StatusCodes } = require('http-status-codes');

const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * 
 *
 */

async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId,
        });

        SuccessResponse.data = airport;

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
async function getAirports(req, res) {
    try {
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).send({SuccessResponse});
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).send({ErrorResponse});
    }
};


async function getAirport(req, res) {
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).send({SuccessResponse});
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).send({ErrorResponse});
    }
};


async function destroyAirport(req, res) {
    try {
        const response = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send({SuccessResponse});
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).send({ErrorResponse});
    }
};


async function updateAirport(req, res) {
    try {
        const airport = await AirportService.updateAirport(
            req.params.id,
            req.body
        );

        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).send({SuccessResponse});
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).send({ErrorResponse});
    }
};

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}