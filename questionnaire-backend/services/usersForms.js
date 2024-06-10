const { UsersForms } = require("./schemas");

function findAll() {
  return UsersForms.find();
}

function findById(id) {
  return UsersForms.findById(id);
}

function findByCondition(condition = {}) {
  return UsersForms.findOne(condition);
}

module.exports = { findAll, findById, findByCondition };
