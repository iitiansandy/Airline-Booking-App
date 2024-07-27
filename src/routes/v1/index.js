const express = require('express');
const router = express.Router();

const { InfoController } = require('../../controllers');

const airplaneRoutes = require('./airplaneRoutes');

const cityRoutes = require('./cityRoutes');

// console.log("Inside v1 route");

router.use('/airplanes', airplaneRoutes);

router.use('/cities', cityRoutes);

router.get('/info', InfoController.info);

module.exports = router;