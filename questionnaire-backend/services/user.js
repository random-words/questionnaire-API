const { User } = require("./schemas");

async function findAll(options) {
  return User.find().limit(options.limit).skip(options.skip);
}

async function findById(id) {
  return User.findById(id);
}

async function findByEmail(email) {
  return User.findOne({ email });
}

async function create(data) {
  return User.create(data);
}

async function findByCondition(condition = {}) {
  return User.findOne(condition);
}

async function updateById(id, data) {
  return User.findByIdAndUpdate(id, data, { new: true });
}

async function deleteById(id) {
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
