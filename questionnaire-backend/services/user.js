const User = require("./schemas/user");

function create(data) {
  return User.create(data);
}

function findById(id) {
  return User.findById(id);
}

function findByEmail(email) {
  return User.findOne({ email });
}

// кіть шось неправильно, винити цю функцію,
// бо я шось хз як правильно деструктуризацію зробити...
function findByCondition(condition) {
  return User.findOne(condition);
}

function updateByEmail(email, data) {
  return User.findOneAndUpdate({ email }, data, { new: true });
}

function deleteByUsername(username) {
  return User.findOneAndDelete({ username });
}

module.exports = {
  create,
  findById,
  findByEmail,
  findByCondition,
  updateByEmail,
  deleteByUsername,
};
