const db = require("../config.js");
module.exports = {
  getAll,
  add,
  findById,
  getSavedRestaurants,
  getCommentsByUserId,
  getAllRestaurants,
};

function getAll(tableName) {
  return db(tableName);
}
function add(tableName, data) {
  return db(tableName).insert(data);
}
function findById(tableName, id) {
  return db(tableName).where("email", id).first();
}
function getSavedRestaurants(userId) {
  return db("saves")
    .select("restaurants.*") // Assuming you have a 'restaurants' table
    .join("restaurants", "saves.restaurant_id", "restaurants.id")
    .where("saves.user_id", userId);
}
function getCommentsByUserId(userId) {
  return db("comments").select("*").where("user_id", userId);
}
function getAllRestaurants() {
  return db("restaurants").select("*");
}
