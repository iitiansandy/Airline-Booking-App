const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
};


async function getCities() {
    try {
        const cities = await cityRepository.getAll();
        return cities;
    } catch (error) {
        throw new AppError('Cannot fetch data', StatusCodes.INTERNAL_SERVER_ERROR);
    }
};


async function getCity(id) {
    try {
        const city = await cityRepository.get(id);
        return city;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError("The requested city not found", error.statusCode);
        }
        throw new AppError('Cannot fetch data', StatusCodes.INTERNAL_SERVER_ERROR);
    }
};


async function destroyCity(id) {
    try {
        const response = await cityRepository.destroy(id);
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError("The requested city to delete not found", error.statusCode);
        }
        throw new AppError('Cannot fetch data', StatusCodes.INTERNAL_SERVER_ERROR);
    }
};


async function updateCity(id, data) {
    try {
        const city = await cityRepository.update(id, data);
        return city;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError("The requested city to update not found", error.statusCode);
        }
        throw new AppError('Cannot fetch data', StatusCodes.INTERNAL_SERVER_ERROR);
    }
};


module.exports = {
    createCity,
    getCities,
    getCity,
    destroyCity,
    updateCity
}