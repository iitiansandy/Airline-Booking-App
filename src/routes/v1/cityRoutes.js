const express = require('express');
const router = express.Router();

const { CityController } = require('../../controllers');

const { CityMiddlewares } = require('../../middlewares');

// CREATE CITY
router.post('/', CityMiddlewares.validateCreateRequest, CityController.createCity);

// GET ALL CITIES
router.get('/', CityController.getCities);

// GET CITY BY ID
router.get('/:id', CityController.getCity);

// UPDATE CITY BY ID
router.patch('/:id', CityController.updateCity);

// DELETE CITY BY ID
router.delete('/:id', CityController.destroyCity);


module.exports = router;