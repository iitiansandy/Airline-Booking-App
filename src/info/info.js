// added a new city model using the following commands:
```
npx sequelize model:generate --name City --attributes name:string
npx sequelize db:migrate

npx sequelize model:generate --name Airport --attributes name:string,code:string,address:string,cityId:integer

npx sequelize migration:generate --name update-city-airport-association

npx sequelize model:generate --name Flight --attributes flightNumber:string,airplaneId:integer,departureAirportId:integer,arrivalAirportId:integer,arrivalTime:date,departureTime:date,price:integer,boardingGate:string,totalSeats:integer
```