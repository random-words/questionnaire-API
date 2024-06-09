const { Form } = require("./schemas");

function findAll() {
  return Form.find();
}

function findFormById(id) {
  return Form.findById(id);
}

function create(data) {
  return Form.create(data);
}

function update(id, data) {
  return Form.findByIdAndUpdate(id, data);
}
