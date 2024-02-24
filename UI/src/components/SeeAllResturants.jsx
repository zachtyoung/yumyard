import React, { useState, useEffect } from "react";
import axios from "axios";

const SeeAllResturants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch all restaurants from the backend
    axios
      .get("http://localhost:5005/restaurants")
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
      <h2>See all</h2>
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

export default SeeAllResturants;
