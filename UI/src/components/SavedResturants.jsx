import React, { useState, useEffect } from "react";
import axios from "axios";

const SavedRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch all restaurants from the backend
    axios
      .post("http://localhost:5005/users/saved-restaurants", { id: 1 })
      .then((response) => {
        console.log(response);
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
      });
  }, []);

  return (
    <div className="home__saved_resturants">
      <h2>Saved restaurants</h2>
      <div className="home__saved_resturants_horizontal_list">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="home__saved_resturant_card">
            <h3>{restaurant.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedRestaurants;
