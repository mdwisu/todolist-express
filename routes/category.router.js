const express = require('express');
const router = express.Router();
const {
  addCategory,
  getCategories,
  getCategoryById,
  deleteCategory,
  updateCategory,
} = require('../controllers/category.controller.js');
const { verifyToken } = require('../middleware/verifyToken.js');

router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.post('/', addCategory);
router.patch('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
