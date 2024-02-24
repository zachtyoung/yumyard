/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("restaurants", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("password").notNullable();
    table.jsonb("location").notNullable();
    table.jsonb("menu");
    table.jsonb("photos");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("restaurants");
};
