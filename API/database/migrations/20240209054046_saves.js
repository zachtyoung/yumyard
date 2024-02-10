exports.up = function (knex) {
  return knex.schema.createTable("saves", function (table) {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table.integer("restaurant_id").unsigned().notNullable();

    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE"); // Define foreign key constraint for user_id
    table
      .foreign("restaurant_id")
      .references("id")
      .inTable("restaurants")
      .onDelete("CASCADE"); // Define foreign key constraint for restaurant_id

    table.unique(["user_id", "restaurant_id"]); // Ensure each user can save a restaurant only once
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("saves");
};
