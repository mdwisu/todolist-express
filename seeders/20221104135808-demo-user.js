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
    await queryInterface.bulkInsert('users', [
      {
        fullname: 'dwi',
        email: 'dwi1@gmail.com',
        password: '$2b$10$kIeteX6kR/5YjePT9QtiA.6FuFUvez6aq2JQOuGVlygMXt7upWC1G',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: 'dwi',
        email: 'dwi2@gmail.com',
        password: '$2b$10$kIeteX6kR/5YjePT9QtiA.6FuFUvez6aq2JQOuGVlygMXt7upWC1G',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: 'dwi',
        email: 'dwi3@gmail.com',
        password: '$2b$10$kIeteX6kR/5YjePT9QtiA.6FuFUvez6aq2JQOuGVlygMXt7upWC1G',
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
     return queryInterface.bulkDelete('Users', null, {});
  },
};
