const { Form } = require("./schemas");

function findAll() {
  return Form.find();
}

function findById(id) {
  return Form.findById(id);
}

function findByCondition(condition = {}) {
  return Form.findOne(condition);
}

function create(data) {
  return Form.create(data);
}

function update(id, data) {
  return Form.findByIdAndUpdate(id, data, { new: true });
}

function deleteForm(id) {
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
