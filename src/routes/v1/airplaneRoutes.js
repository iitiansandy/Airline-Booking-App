const express = require('express');
const router = express.Router();

// console.log("Inside airplane route");
const { AirplaneController } = require('../../controllers');

const { AirplaneMiddlewares } = require('../../middlewares');

// ADD AIRPLANES
router.post('/', AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane);

// GET ALL AIRPLANES
router.get('/', AirplaneController.getAirplanes);

// GET AIRPLANE BY ID
router.get('/:id', AirplaneController.getAirplane);

// DELETE AIRPLANE BY ID
router.delete('/:id', AirplaneController.destroyAirplanes);

// UPDATE AIRPLANE BY ID
router.patch('/:id', AirplaneController.updateAirplane);

module.exports = router;