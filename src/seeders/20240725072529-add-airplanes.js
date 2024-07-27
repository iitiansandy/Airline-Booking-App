"use strict";

const { Op } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert("Airplanes", [
            {
              modelNumber: "Airbus340",
              capacity: 500,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              modelNumber: "Boeing777",
              capacity: 480,
              createdAt: new Date(),
              updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Airplanes', {[Op.or]: [{modelNumber: "Boeing777"}, {modelNumber: "Airbus340"}]});
    },
};
