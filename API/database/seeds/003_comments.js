exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("comments")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("comments").insert([
        {
          id: 1,
          content: "Great food!",
          user_id: 1, // Assuming this user exists
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          content: "Amazing service!",
          user_id: 2, // Assuming this user exists
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          content: "Best restaurant ever!",
          user_id: 3, // Assuming this user exists
          created_at: new Date(),
          updated_at: new Date(),
        },
        // Add more seed data as needed
      ]);
    });
};
