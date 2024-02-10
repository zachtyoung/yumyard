exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "john_doe",
          email: "john@example.com",
          password: "hashed_password_here",
          location: { city: "New York", country: "USA" },
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          username: "jane_doe",
          email: "jane@example.com",
          password: "hashed_password_here",
          location: { city: "Los Angeles", country: "USA" },
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          username: "bob_smith",
          email: "bob@example.com",
          password: "hashed_password_here",
          location: { city: "London", country: "UK" },
          created_at: new Date(),
          updated_at: new Date(),
        },
        // Add more seed data as needed
      ]);
    });
};
