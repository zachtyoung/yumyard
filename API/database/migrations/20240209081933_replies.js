exports.up = function (knex) {
  return knex.schema.createTable("replies", function (table) {
    table.increments("id").primary();
    table.text("content").notNullable();
    table.integer("comment_id").unsigned().notNullable();
    table.integer("user_id").unsigned().notNullable();

    table
      .foreign("comment_id")
      .references("id")
      .inTable("comments")
      .onDelete("CASCADE"); // Define foreign key constraint for comment_id
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE"); // Define foreign key constraint for user_id

    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("replies");
};
