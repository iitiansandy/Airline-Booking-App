const express = require('express');
const bodyParser = require('body-parser');

const { ServerConfig, logger } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send("<h1>Airline Booking App is Up and Running</h1>")
});

app.listen(ServerConfig.port, () => {
    console.log("app is running on port", ServerConfig.port);
});