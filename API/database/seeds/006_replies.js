exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("replies")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("replies").insert([
        {
          id: 1,
          content: "Reply 1",
          comment_id: 1, // Assuming this comment exists
          user_id: 1, // Assuming this user exists
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          content: "Reply 2",
          comment_id: 2, // Assuming this comment exists
          user_id: 2, // Assuming this user exists
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          content: "Reply 3",
          comment_id: 3, // Assuming this comment exists
          user_id: 3, // Assuming this user exists
          created_at: new Date(),
          updated_at: new Date(),
        },
        // Add more seed data as needed
      ]);
    });
};
