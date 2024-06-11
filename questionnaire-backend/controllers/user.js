const { userService } = require("../services");

async function findAll(req, res, next) {
  try {
    const users = await userService.findAll();
    res.json({
      status: "success",
      code: 200,
      data: {
        users,
      },
    });
    return users;
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function findById(req, res, next) {
  const { id } = req.params;
  try {
    const user = await userService.findById(id);
    if (user) {
      res.json({
        status: "success",
        code: 200,
        message: "User Found",
        data: {
          user,
        },
      });
      return user;
    }
    res.status(404).json({
      status: "Error",
      code: 404,
      message: `User With ID ${id} Not Found`,
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
    const user = await userService.findByEmail(email);
    if (user) {
      res.json({
        status: "success",
        code: 200,
        message: "User Found",
        data: {
          user,
        },
      });
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

async function findByCondition(condition) {
  try {
    const user = await userService.findByCondition(condition);
    if (user) {
      return user;
    }
    return null;
  } catch (e) {
    console.error(e);
  }
}

async function validate(userData) {
  try {
    const email = await userService.findByCondition({ email: userData.email });
    const password = await userService.findByCondition({
      password: userData.password,
    });

    if (email && password) {
      return true;
    }
    return false;
  } catch (e) {
    console.error(e);
  }
}

async function create(req, res, next) {
  const data = req.body;
  try {
    const user = await userService.create(data);
    res.json({
      status: "success",
      code: 201,
      message: "User Created",
      data: {
        user,
      },
    });
    return user;
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function update(req, res, next) {
  const { id } = req.params;
  const data = req.body;
  try {
    const user = await userService.findById(id);
    if (user) {
      const updatedUser = await userService.updateById(id, data);
      res.json({
        status: "success",
        code: 200,
        message: "Data is Updated",
        data: {
          updatedUser,
        },
      });
      return updatedUser;
    }
    res.status(404).json({
      status: "Error",
      code: 404,
      message: `User With ID ${id} Not Found`,
      data: "Not Found",
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function deleteUser(req, res, next) {
  const { id } = req.params;
  try {
    const user = await userService.findById(id);
    if (user) {
      const deletedUser = await userService.deleteById(id);
      res.json({
        status: "success",
        code: 200,
        message: "User Deleted",
        data: {
          deletedUser,
        },
      });
      return;
    }
    res.status(404).json({
      status: "Error",
      code: 404,
      message: `User With ID ${id} Not Found`,
      data: "Not Found",
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
}

module.exports = {
  findAll,
  findById,
  findByEmail,
  findByCondition,
  validate,
  create,
  update,
  deleteUser,
};
