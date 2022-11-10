'use strict';

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
    await queryInterface.bulkInsert('Todolists', [
      {
        title: 'test title',
        description: 'test desc',
        status: 'To Do',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'test title',
        description: 'test desc',
        status: 'To Do',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'test title',
        description: 'test desc',
        status: 'To Do',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
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
    return queryInterface.bulkDelete('Todolists', null, {});
  },
};
