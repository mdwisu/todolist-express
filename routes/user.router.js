const express = require('express');
const router = express.Router();
const { getUsers, getUserById, updateUser, createUser, deleteUser} = require('../controllers/user.controller.js')

router.get("/", getUsers)
router.get("/:id", getUserById)
router.post("/", createUser)
router.patch("/:id", updateUser)
router.delete("/:id", deleteUser)

module.exports = router