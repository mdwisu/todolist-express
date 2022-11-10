const express = require("express");
const router = express.Router();

const authRoute = require("./auth.router");
const categoryRoute = require("./category.router")
const todolistRoute = require("./todolist.router")
const userRoute = require("./user.router")

router.use(authRoute);
router.use("/users", userRoute);
router.use("/categories", categoryRoute);
router.use("/todolists", todolistRoute);

module.exports = router;
