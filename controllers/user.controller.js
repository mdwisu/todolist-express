const models = require('../models');
const { User } = models;
const bcrypt = require('bcrypt');

module.exports = {
  getUsers: async (req, res) => {
    try {
      // find
      const data = await User.findAll();
      // if data null
      if (data === null) {
        res.status(404).json({ msg: 'Data not found' });
      } else {
        // res data
        res.status(200).json({ data });
      }
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  getUserById: async (req, res) => {
    try {
      // get params id
      const { id } = req.params;
      // find one
      const data = await User.findOne({ where: { id } });
      // if data null
      if (data === null) {
        res.status(404).json({ msg: 'Data not found' });
      } else {
        // res data
        res.status(200).json({ data });
      }
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  createUser: async (req, res) => {
    try {
      // get data
      let { fullname, email, password } = req.body;
      // hash password
      const saltRounds = 10;
      const hash = bcrypt.hashSync(password, saltRounds);
      password = hash;
      console.log(password);
      // create user
      await User.create({ fullname, email, password });
      res.status(201).json({ msg: 'User Created Successfuly' });
    } catch (error) {
      if (error.errors[0].type == 'Validation error') {
        res.status(400).json({ msg: error.message });
      } else if (error.errors[0].type == 'unique violation') {
        res.status(500).json({ msg: 'email telah terdaftar' });
      } else {
        res.status(500).json({ msg: error.message });
      }
    }
  },
  updateUser: async (req, res) => {
    try {
      // find one
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!user) return res.status(404).json({ msg: 'Data tidak ditemukan' });
      // ambil body
      const { fullname, email, password } = req.body;
      await User.update(
        { fullname, password },
        {
          where: {
            id: user.id,
          },
        }
      );

      res.status(200).json({ msg: 'User updated successfuly' });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const row = await User.findOne({
        where: { id: req.params.id },
      });
      if (row) {
        await row.destroy(); // deletes the row
      }
      res.status(200).json({ msg: 'User berhasil di hapus' });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
};
