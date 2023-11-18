'use strict';

const { DAILY_TABLE, DailySchema } = require('./../models/daily.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(DAILY_TABLE, DailySchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(DAILY_TABLE)
  }
};
