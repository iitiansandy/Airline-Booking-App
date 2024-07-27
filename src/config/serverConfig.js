const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT,
    userName: process.env.SQL_USERNAME,
    dbName: process.env.SQL_DB_NAME,
    password: process.env.SQL_PASSWORD,
}