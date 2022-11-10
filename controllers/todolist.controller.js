// const { Sequelize, DataTypes } = require('sequelize');
// const Category = require('../models/category.js');
const models = require('../models');
const { Category, User, Todolist } = models;

module.exports = {
  getTodolists: async (req, res) => {
    const data = await Todolist.findAll({
      include: [{ model: User }, { model: Category }],
    });
    res.status(200).json({
      data,
    });
  },
  getTodolistById: async (req, res) => {
    const { id } = req.params;
    const data = await Todolist.findOne({
      where: {
        id,
      },
      include: [{ model: User }, { model: Category }],
    });
    res.status(200).json({
      data,
    });
  },
  createTodolist: async (req, res) => {
    try {
      const { title, description, status, userId, categoryId } = req.body;
      const user = await Todolist.create({
        title,
        description,
        status,
        userId,
        categoryId,
      });
      res.status(200).json({
        msg: 'Todolist has been created',
        data: user,
      });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  updateTodolist: async (req, res) => {
    try {
      // find one
      const todolist = await Todolist.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!todolist)
        return res.status(404).json({ msg: 'Data tidak ditemukan' });
      // ambil body
      const { title, description, status, userId, categoryId } = req.body;
      await Todolist.update(
        { title, description, status, userId, categoryId },
        {
          where: {
            id: todolist.id,
          },
        }
      );

      res.status(200).json({ msg: 'Todolist updated successfuly' });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  deleteTodolist: async (req, res) => {
    try {
      const row = await Todolist.findOne({
        where: { id: req.params.id },
      });
      if (row) {
        await row.destroy(); // deletes the row
      }
      res.status(200).json({ msg: 'Todolist berhasil di hapus' });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
};
