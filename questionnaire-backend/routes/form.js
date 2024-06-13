const express = require("express");
const router = express.Router();
const { formController } = require("../controllers");

// get all user's form
router.get("/", formController.findAll);

// get user's form by ID
router.get("/:id", formController.findById);

// how the fuck use that?..
// router.post("/", formController.findByCondition);

// create a user's form
router.post("/", formController.create);

// update form by ID
router.put("/:id", formController.update);

// delete form by ID
router.delete("/:id", formController.deleteForm);

module.exports = router;
