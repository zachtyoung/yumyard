exports.up = function (knex) {
  return knex.schema.createTable("likes", function (table) {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table.integer("comment_id").unsigned().notNullable();

    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE"); // Define foreign key constraint for user_id
    table
      .foreign("comment_id")
      .references("id")
      .inTable("comments")
      .onDelete("CASCADE"); // Define foreign key constraint for comment_id

    table.unique(["user_id", "comment_id"]); // Ensure each user can like a comment only once
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("likes");
};
