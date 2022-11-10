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

// no verify
// router.get('/', getCategories);
// router.get('/:id', getCategoryById);
// router.post('/', addCategory);
// router.patch('/:id', updateCategory);
// router.delete('/:id', deleteCategory);

// with verify
router.get('/', verifyToken, getCategories);
router.get('/:id', verifyToken, getCategoryById);
router.post('/', verifyToken, addCategory);
router.patch('/:id', verifyToken, updateCategory);
router.delete('/:id', verifyToken, deleteCategory);

module.exports = router;
