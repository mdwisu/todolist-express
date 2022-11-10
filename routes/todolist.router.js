const express = require('express');
const router = express.Router();
const {
  getTodolists,
  createTodolist,
  getTodolistById,
  updateTodolist,
  deleteTodolist,
} = require('../controllers/todolist.controller.js');
const { verifyToken } = require('../middleware/verifyToken.js');

// no verify
// router.get('/', getTodolists);
// router.get('/:id', getTodolistById);
// router.post('/', createTodolist);
// router.patch('/:id', updateTodolist);
// router.delete('/:id', deleteTodolist);

// with verify
router.get('/', verifyToken, getTodolists);
router.get('/:id', verifyToken, getTodolistById);
router.post('/', verifyToken, createTodolist);
router.patch('/:id', verifyToken, updateTodolist);
router.delete('/:id', verifyToken, deleteTodolist);

module.exports = router;
