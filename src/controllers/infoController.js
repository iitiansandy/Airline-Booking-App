const { StatusCodes } = require('http-status-codes');

const info = (req, res) => {
    res.status(StatusCodes.OK).send({
        success: true,
        message: "Hi from controller",
        error: {},
        data: {},
    });
};

module.exports = { info };
