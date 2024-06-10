const express = require("express");
const router = express.Router();
const { usersFormsController } = require("../controllers");

// all of users forms
router.get("/", usersFormsController.findAll);

// find other user form by id
router.get("/:id", usersFormsController.findById);

// find other user form by condition
router.post("/", usersFormsController.findByCondition);

module.exports = router;
