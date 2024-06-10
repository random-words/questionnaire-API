const { usersFormsService } = require("../services");

async function findAll(req, res, next) {
  try {
    const usersForms = await usersFormsService.findAll();
    res.json({
      status: "success",
      code: 200,
      data: {
        usersForms,
      },
    });
    return usersForms;
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function findById(req, res, next) {
  const { id } = req.params;
  try {
    const form = await usersFormsService.findById(id);
    if (form) {
      res.json({
        status: "success",
        code: 200,
        message: "Form Found",
        data: {
          form,
        },
      });
      return form;
    }
    res.status(404).json({
      status: "Error",
      code: 404,
      message: `Form with ID ${id} not found`,
      data: "Not Found",
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function findByCondition(req, res, next) {
  const { condition } = req.body;
  try {
    const form = await usersFormsService.findByCondition({ condition });
    if (form) {
      res.json({
        status: "success",
        code: 200,
        message: "Form Found",
        data: {
          form,
        },
      });
      return form;
    }
    res.status(404).json({
      status: "Error",
      code: 404,
      message: `Form with condition ${condition} not found`,
      data: "Not Found",
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
}

module.exports = { findAll, findById, findByCondition };
