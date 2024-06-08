const userService = require("../services/user");

async function findById(req, res, next) {
  const { id } = req.params;
  try {
    const user = userService.findById(id);
    if (user) {
      res.json({
        status: "success",
        code: 200,
        message: "User Found",
        data: {
          user,
        },
      });
      return;
    }
    res.status(404).json({
      status: "Error",
      code: 404,
      message: "User Not Found",
      data: "Not Found",
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function findByEmail(req, res, next) {
  const { email } = req.body;
  try {
    const user = userService.findByEmail(email);
    if (user) {
      return user;
    }
    res.status(404).json({
      status: "Error",
      code: 404,
      message: "User Not Found",
      data: "Not Found",
    });
  } catch (e) {
    console.err(e);
    next(e);
  }
}

async function validate(userData) {
  try {
    const email = await userService.findByEmail(userData.email);
    const password = await userService.findByCondition(userData.password);

    if (email && password) {
      return true;
    }
    return false;
  } catch (e) {
    console.error(e);
  }
}

async function create(req, res, next) {
  const { firstName, lastName, username, email, password } = req.body;
  try {
    await userService.create({
      firstName,
      lastName,
      username,
      email,
      password,
    });
    res.render("userPage", { username });
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function update(req, res, next) {
  const { email, data } = req.body;
  try {
    const user = userService.findByEmail(email);
    if (user) {
      const updatedUser = userService.updateByEmail(email, data);
      res.json({
        status: "success",
        code: 200,
        message: "Data is Updated",
        data: {
          updatedUser,
        },
      });
      return;
    }
    res.status(404).json({
      status: "Error",
      code: 404,
      message: "User Not Found",
      data: "Not Found",
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function deleteUser(req, res, next) {
  const { username } = req.body;
  try {
    // короче тут буде передаватися об'єкт, властивість якого - username,
    // яка тоже є в схемі, тому всьо пройде, але бажано
    // перенести таку деструктуризацію в сервіси
    const user = userService.findByCondition({ username });
    if (user) {
      const deletedUser = userService.deleteByUsername(username);
      res.json({
        status: "success",
        code: 200,
        message: "User Deleted Successfully",
        data: {
          deletedUser,
        },
      });
    }
  } catch (e) {}
}
