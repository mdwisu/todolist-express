// const { Sequelize, DataTypes } = require('sequelize');
// const Category = require('../models/category.js');
const models = require('../models');
const { Category } = models;

module.exports = {
  getCategories: async (req, res) => {
    const data = await Category.findAll();
    res.status(200).json({
      data,
    });
  },
  getCategoryById: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Category.findOne({
        where: {
          id,
        },
      });
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({
        msg: error.message,
      });
    }
  },
  addCategory: async (req, res) => {
    try {
      const { name } = req.body;
      // Create a new category
      const data = await Category.create({
        name,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      res.status(200).json({
        msg: 'data berhasil dibuat',
        data,
      });
    } catch (error) {
      res.status(500).json({
        msg: error.message,
      });
    }
  },
  updateCategory: async (req, res) => {
    try {
      // find one
      const category = await Category.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!category)
        return res.status(404).json({ msg: 'Data tidak ditemukan' });
      // ambil body
      const { name } = req.body;
      await Category.update(
        { name },
        {
          where: {
            id: category.id,
          },
        }
      );

      res.status(200).json({ msg: 'Category updated successfuly' });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const row = await Category.findOne({
        where: { id: req.params.id },
      });
      if (row) {
        await row.destroy(); // deletes the row
      }
      res.status(200).json({ msg: 'Category berhasil di hapus' });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
};
