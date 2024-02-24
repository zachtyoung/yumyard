exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("restaurants")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("restaurants").insert([
        {
          id: 1,
          name: "Restaurant 1",
          location: JSON.stringify({ latitude: 40.7128, longitude: -74.006 }), // Using location column instead of coordinates
          password: "hashed_password_here",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "Restaurant 2",
          location: JSON.stringify({ latitude: 34.0522, longitude: -118.2437 }), // Using location column instead of coordinates
          password: "hashed_password_here",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: "Restaurant 3",
          location: JSON.stringify({ latitude: 51.5074, longitude: -0.1278 }), // Using location column instead of coordinates
          password: "hashed_password_here",
          created_at: new Date(),
          updated_at: new Date(),
        },
        // Add more seed data as needed
      ]);
    });
};
