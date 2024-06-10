const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const formRouter = require("./form");
const usersForms = require("./usersForms");
// якщо не буде робити, поставити назад деструктуризацію

// main user page
router.get("/", (req, res) => {
  res.render("userPage");
});

// show all users to a user
router.get("/users", userController.findAll);

// show a specific user to a user
router.get("/users/:id", userController.findById);

// if data on page is entered, find users,
// that are suitable for condition
// окей, тут проблеми із цим методом...
router.post("/users", userController.findByCondition);

// update user's data
router.put("/:id", userController.update);

// delete user
router.delete("/:id", userController.deleteUser);

// form route with all form's logic
router.use("/form", formRouter);

// other users forms route
router.use("/users-forms", usersForms);

module.exports = router;
