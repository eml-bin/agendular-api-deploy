"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert("dailies", [
            {
                note: "Daily Lunes, iniciando la semana x_x",
                emotion: "😪",
                color: "#03331f",
                daily_timestamp: (new Date(2023, 11, 20).getTime()/1000)
            },
            {
                note: "Daily Martes, día dos, viernes lejos",
                emotion: "😐",
                color: "#03331f",
                daily_timestamp: (new Date(2023, 11, 21).getTime()/1000)
            },
            {
                note: "Daily Miércoles, ya casi veo pronto el descanse",
                emotion: "🙂",
                color: "#03331f",
                daily_timestamp: (new Date(2023, 11, 22).getTime()/1000)
            },
            {
                note: "Daily Jueves, por fin tengo energía para continuar",
                emotion: "😁",
                color: "#03331f",
                daily_timestamp: (new Date(2023, 11, 23).getTime()/1000)
            },
            {
                note: "Daily Viernes, el mejor día de la semana",
                emotion: "😍",
                color: "#03331f",
                daily_timestamp: (new Date(2023, 11, 24).getTime()/1000)
            },
        ]);
    },

    // async down(queryInterface, Sequelize) {
    //     /**
    //      * Add commands to revert seed here.
    //      *
    //      * Example:
    //      * await queryInterface.bulkDelete('People', null, {});
    //      */
    // },
};
