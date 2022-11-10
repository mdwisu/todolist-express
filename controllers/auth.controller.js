const models = require('../models');
const { User } = models;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  Login: async (req, res) => {
    try {
      // ambil body
      const { email, password } = req.body;
      // find user by email
      const userData = await User.findOne({ where: { email } });
      // if not find
      if (userData === null) {
        res.status(404).json({ msg: 'User tidak ditemukan' });
      }
      // compare password
      const match = bcrypt.compareSync(password, userData.password); // true
      if (!match) return res.status(400).json({ msg: 'Wrong Password' });

      const token = jwt.sign(
        {
          id: userData.id,
          fullname: userData.fullname,
          email,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: '1m',
        }
      );
      if (userData) {
        res.json({
          msg: 'success login',
          token,
        });
      } else {
        res.status(401).json({
          message: 'email or password are incorrect',
        });
      }
    } catch (error) {
      res.status(500).json({
        msg: error.message,
      });
    }
  },
};
