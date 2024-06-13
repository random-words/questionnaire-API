const { formService } = require("../services");

async function findAll(req, res, next) {
  try {
    const forms = await formService.findAll();
    res.json({
      status: "success",
      code: 200,
      data: {
        forms,
      },
    });
    return forms;
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function findById(req, res, next) {
  const { id } = req.params;
  try {
    const form = await formService.findById(id);
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

// don't know how to do it...
async function findByCondition(req, res, next) {
  const condition = req.query;
  try {
    const form = await formService.findByCondition(condition);
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
    const keys = Object.keys(condition);
    res.status(404).json({
      status: "Error",
      code: 404,
      message: `Form with condition '${keys[0]}' not found`,
      data: "Not Found",
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function create(req, res, next) {
  const data = req.body;
  try {
    const form = await formService.create(data);
    res.json({
      status: "success",
      code: 201,
      message: "Form Created Successfully",
      data: {
        form,
      },
    });
    return form;
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function update(req, res, next) {
  const { id } = req.params;
  const data = req.body;
  try {
    const form = await formService.findById(id);
    if (form) {
      const updatedForm = await formService.update(id, data);
      res.json({
        status: "success",
        code: 200,
        message: "Form Updated Successfully",
        data: {
          updatedForm,
        },
      });
      return updatedForm;
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

async function deleteForm(req, res, next) {
  const { id } = req.params;
  try {
    const form = await formService.findById(id);
    if (form) {
      const deletedForm = await formService.deleteForm(id);
      res.json({
        status: "success",
        code: 200,
        message: "User Deleted Successfully",
        data: {
          deletedForm,
        },
      });
      return deletedForm;
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

module.exports = {
  findAll,
  findById,
  findByCondition,
  create,
  update,
  deleteForm,
};
