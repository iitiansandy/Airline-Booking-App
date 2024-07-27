const express = require('express');
const router = express.Router();

// console.log("Inside airplane route");
const { AirportController } = require('../../controllers');

const { AirportMiddlewares } = require('../../middlewares');

// ADD AIRPLANES
router.post('/', AirportMiddlewares.validateCreateRequest, AirportController.createAirport);

// GET ALL AIRPLANES
router.get('/', AirportController.getAirports);

// GET AIRPLANE BY ID
router.get('/:id', AirportController.getAirport);

// DELETE AIRPLANE BY ID
router.delete('/:id', AirportController.destroyAirport);

// UPDATE AIRPLANE BY ID
router.patch('/:id', AirportController.updateAirport);

module.exports = router;