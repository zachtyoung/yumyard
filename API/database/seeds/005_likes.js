exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("likes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("likes").insert([
        {
          id: 1,
          user_id: 1, // Assuming this user exists
          comment_id: 1, // Assuming this comment exists
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          user_id: 2, // Assuming this user exists
          comment_id: 2, // Assuming this comment exists
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          user_id: 3, // Assuming this user exists
          comment_id: 3, // Assuming this comment exists
          created_at: new Date(),
          updated_at: new Date(),
        },
        // Add more seed data as needed
      ]);
    });
};
