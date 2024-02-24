exports.up = function (knex) {
  return knex.schema.createTable("restaurant_photos", function (table) {
    table.increments("id").primary();
    table.integer("restaurant_id").unsigned().notNullable();
    table
      .foreign("restaurant_id")
      .references("id")
      .inTable("restaurants")
      .onDelete("CASCADE");
    table.string("photo_url").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("restaurant_photos");
};
