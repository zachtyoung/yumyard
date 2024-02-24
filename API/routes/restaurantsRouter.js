const express = require("express");
const db = require("../database/models/global-model.js");
const router = express.Router();

router.get("/", (req, res) => {
  db.getAllRestaurants()
    .then((restaurants) => {
      res.status(200).json(restaurants);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch restaurants" });
    });
});

module.exports = router;
