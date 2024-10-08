const { FlightService } = require('../services');
const { StatusCodes } = require('http-status-codes');

const { SuccessResponse, ErrorResponse } = require('../utils/common');


async function createAirport(req, res) {
    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats
        });

        SuccessResponse.data = flight;

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
async function getAllFlights(req, res) {
    try {
        // console.log("req.query", req.query);
        const flights = await FlightService.getAllFlights(req.query);
        SuccessResponse.data = flights;
        return res.status(StatusCodes.OK).send({SuccessResponse});
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).send({ErrorResponse});
    }
};


async function getFlight(req, res) {
    try {
        const flight = await FlightService.getFlight(req.params.id);
        SuccessResponse.data = flight;
        return res.status(StatusCodes.OK).send({SuccessResponse});
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).send({ErrorResponse});
    }
};


async function destroyFlight(req, res) {
    try {
        const response = await FlightService.destroyFlight(req.params.id);
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


async function updateSeats(req, res) {
    try {
        const { id } = req.params;
        const { seats, dec } = req.body;
        const response = await FlightService.updateSeats({
            flightId: id,
            seats, 
            dec
        });
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send({SuccessResponse});
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).send({ErrorResponse});
    }
};

module.exports = {
    createAirport,
    getFlight,
    getAllFlights,
    destroyFlight,
    updateSeats
}