exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("saves")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("saves").insert([
        {
          id: 1,
          user_id: 1, // Assuming this user exists
          restaurant_id: 1, // Assuming this restaurant exists
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          user_id: 2, // Assuming this user exists
          restaurant_id: 2, // Assuming this restaurant exists
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          user_id: 3, // Assuming this user exists
          restaurant_id: 3, // Assuming this restaurant exists
          created_at: new Date(),
          updated_at: new Date(),
        },
        // Add more seed data as needed
      ]);
    });
};
