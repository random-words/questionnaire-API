const { Form } = require("./schemas");

async function findAll() {
  return Form.find().populate("User");
}

async function findById(id) {
  // використовуєм populate, шоби передати в уже створене поле
  // об'єкт юзера, на який посилається анкета
  return Form.findById(id).populate("User");
}

async function findByCondition(condition = {}) {
  return Form.findOne(condition).populate("User");
}

async function create(data) {
  return Form.create(data).populate("User");
}

async function update(id, data) {
  return Form.findByIdAndUpdate(id, data, { new: true });
}

async function deleteForm(id) {
  return Form.findByIdAndDelete(id);
}

module.exports = {
  findAll,
  findById,
  findByCondition,
  create,
  update,
  deleteForm,
};
