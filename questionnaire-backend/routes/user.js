const express = require("express");
const router = express.Router();

/**
 * тут точно має бути роут для апдейта даних юзера, видалення юзера(?)
 */

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
