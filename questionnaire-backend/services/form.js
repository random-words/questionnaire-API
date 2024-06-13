const { Form } = require("./schemas");

async function findAll() {
  return Form.find().populate("user", ["username", "firstName", "lastName"]);
}

async function findById(id) {
  // використовуєм populate, шоби передати в уже створене поле
  // об'єкт юзера, на який посилається анкета
  // (В ПОЛЕ, В ППППООООЛЛЛЕЕЕЕ user, ЯКЕ МИ СТВОРИЛИ У СХЕМІ ФОРМИ)
  // (тоді, ЛОГІЧНО, шо писати не СХЕМУ юзера, а ПОЛЕ, яке у схемі форми...)
  return Form.findById(id).populate("user", [
    "username",
    "firstName",
    "lastName",
  ]);
}

async function findByCondition(condition = {}) {
  return Form.findOne(condition).populate("user", [
    "username",
    "firstName",
    "lastName",
  ]);
}

async function create(data) {
  return Form.create(data);
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
