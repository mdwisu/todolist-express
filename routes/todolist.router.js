const express = require('express');
const router = express.Router();
const { getTodolists, createTodolist, getTodolistById, updateTodolist, deleteTodolist} = require('../controllers/todolist.controller.js')

router.get('/', getTodolists)
router.get('/:id', getTodolistById)
router.post('/', createTodolist)
router.patch('/:id', updateTodolist)
router.delete('/:id', deleteTodolist)


module.exports = router
