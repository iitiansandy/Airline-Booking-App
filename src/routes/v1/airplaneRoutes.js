const express = require('express');
const router = express.Router();

// console.log("Inside airplane route");
const { AirplaneController } = require('../../controllers');

const { AirplaneMiddlewares } = require('../../middlewares');

router.post('/', AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane);

router.get('/', AirplaneController.getAirplanes);

router.get('/:id', AirplaneController.getAirplane);

module.exports = router;