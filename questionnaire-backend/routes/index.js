const express = require("express");
const router = express.Router();
const userController = require("../controllers");

function verify(req, res, next) {
  // Вроді є якийсь метод у mongoose'а, який дозволяє перевірити,
  // чи правильно введений пароль або якісь дані - його і використати
  const isValid = userController.checkData(data);
  if (isValid) {
    next();
    return;
  }
  res.render("error", {
    message: "Entered Incorrect Data",
    error: { status: 401, stack: "Not Found" },
  });
}

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// register page
router.get("/register", (req, res) => {});

// login page (must lead to user's page & need middleware, that must verify data from user)

// є два варіанти, як це можна зробити: або перед основной функцією перевіряти,
// і, якщо не корректні дані - то вибити еррор(грубо кажучи) (якщо правильно - продовжити роботу і перейти на наступну функцію)

// другий варіант - вбити у колбек-функцію цей verify і там провірити (якщо да - то вивести дані, ні - вибити помилку)
router.get("/login", verify, (req, res) => {});

module.exports = router;
