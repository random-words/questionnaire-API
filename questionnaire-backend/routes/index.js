const express = require("express");
const router = express.Router();
const userController = require("../controllers");

// якщо будуть помилки, то додати async/await
function verify(req, res, next) {
  const userData = req.body;
  const isValid = userController.validate(userData);
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
router.get("/", function (req, res, next) {
  res.render("index", { title: "Hello" });
});

// register page
router.get("/register", (req, res) => {
  res.render("register");
});

// after register, redirect user to user's page
router.post("/register", userController.create);

router.get("/login", (req, res) => {
  res.render("login");
});

// login page (must lead to user's page & need middleware, that must verify data from user)
router.post("/login", verify, (req, res) => {
  const { email } = req.body;
  const user = userController.findByEmail(email);
  res.render("userPage", { username: user.username });
});

module.exports = router;
