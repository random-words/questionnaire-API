const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

// якщо будуть помилки, то додати async/await
async function verify(req, res, next) {
  const userData = req.body;
  const isValid = await userController.validate(userData);
  if (isValid) {
    next();
    return;
  }
  res.json({
    status: "Error",
    code: 400,
    message: "Data Entered Incorrectly",
  });
}
// якщо будуть помилки, то додати async/await

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Hello" });
});

// register page
router.get("/register", (req, res) => {
  res.render("register");
});

// after register, redirect user to user's page
router.post("/register", userController.create, (req, res) => {
  const { username } = req.body;
  res.render("userPage", { username });
});

// login page
router.get("/login", (req, res) => {
  res.render("login");
});

// after login, redirect to user's page
router.post("/login", verify, async (req, res, next) => {
  const { email } = req.body;
  const user = await userController.findByCondition({ email });
  res.render("userPage", { username: user.username });
});

module.exports = router;
