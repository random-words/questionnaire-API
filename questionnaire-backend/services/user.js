const { User } = require("./schemas");

function findAll() {
  return User.find();
}

function findById(id) {
  return User.findById(id);
}

// function findByEmail(email) {
//   return User.findOne({ email });
// }

function create(data) {
  return User.create(data);
}

// кіть шось неправильно, винити цю функцію,
// бо я шось хз як правильно деструктуризацію зробити...
// Вроооді зробив?
function findByCondition(condition = {}) {
  return User.findOne(condition);
}

function updateById(id, data) {
  return User.findOneAndUpdate({ _id: id }, data, { new: true });
}

function deleteById(id) {
  return User.findOneAndDelete({ _id: id });
}

module.exports = {
  findAll,
  create,
  findById,
  findByEmail,
  findByCondition,
  updateById,
  deleteById,
};
