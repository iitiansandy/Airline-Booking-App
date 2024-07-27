const express = require('express');
const router = express.Router();

const { InfoController } = require('../../controllers');

// AIRPLANE ROUTES
const airplaneRoutes = require('./airplaneRoutes');

// CITY ROUTES
const cityRoutes = require('./cityRoutes');

// AIRPORT ROUTES
const airportRoutes = require('./airportRoutes');

// console.log("Inside v1 route");

router.use('/airplanes', airplaneRoutes);

router.use('/cities', cityRoutes);

router.use('/airports', airportRoutes);

router.get('/info', InfoController.info);

module.exports = router;