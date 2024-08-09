const express = require('express');
const router = express.Router();

// console.log("Inside airplane route");
const { FlightController } = require('../../controllers');

const { FlightMiddlewares } = require('../../middlewares');

// ADD AIRPLANES
router.post('/', FlightMiddlewares.validateCreateRequest, FlightController.createAirport);

// GET FLIGHT
router.get('/:id', FlightController.getFlight);

// Get All Flights
router.get('/', FlightController.getAllFlights);

// UPDATE FLIGHT SEATS
router.patch('/:id/seats', FlightMiddlewares.validateUpdateSeatsRequest, FlightController.updateSeats);

// Delete Flight
router.delete('/:id', FlightController.destroyFlight);



module.exports = router;