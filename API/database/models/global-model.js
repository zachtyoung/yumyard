const db = require("../config.js");
module.exports = {
  getAll,
  add,
  findById,
};

function getAll(tableName) {
  return db(tableName);
}
function add(tableName, data) {
  return db(tableName).insert(data);
}
function findById(tableName, id) {
  return db(tableName).where("id", id).first();
}
