function addRowLogOnFlights(filghtId) {
    return `SELECT * from Flights WHERE Flights.id = ${filghtId} FOR UPDATE;`
};

module.exports = {
    addRowLogOnFlights
}