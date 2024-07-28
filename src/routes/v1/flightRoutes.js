const express = require('express');
const router = express.Router();

// console.log("Inside airplane route");
const { FlightController } = require('../../controllers');

const { FlightMiddlewares } = require('../../middlewares');

// ADD AIRPLANES
router.post('/', FlightMiddlewares.validateCreateRequest, FlightController.createAirport);

// Get All Flights
router.get('/', FlightController.getAllFlights);

// Delete Flight
router.delete('/:id', FlightController.destroyFlight);



module.exports = router;