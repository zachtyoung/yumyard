const express = require("express");
const db = require("../database/models/global-model.js");
const bcrypt = require("bcryptjs");
// const restricted = require('../auth/auth-middleware');
const router = express.Router();
const createToken = require("../auth/token.js");

router.post("/saved-restaurants", (req, res) => {
  // Extract the user's ID from the request headers or the token
  const userId = req.body.id; // Assuming you have middleware to extract user information from the request

  // Query the database for the user's saved restaurants
  db.getSavedRestaurants(userId)
    .then((restaurants) => {
      res.status(200).json(restaurants);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch saved restaurants" });
    });
});

router.post("/get-user-comments", (req, res) => {
  const userId = req.body.id; // Assuming the user ID is provided in the request body

  db.getCommentsByUserId(userId)
    .then((comments) => {
      res.status(200).json(comments);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch comments" });
    });
});

router.get("/", (req, res) => {
  db.getAll("users")
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "The user information could not be retrieved." });
    });
});
router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;
  db.add("users", user)
    .then((saved) => {
      const token = createToken.generate(user);
      res.status(201).json({ id: saved.id, name: saved.name, token: token });
    })
    .catch((error) => {
      res.status(500).json(error);
      console.log(error);
    });
});

router.post("/login", (req, res) => {
  let { email, password } = req.body;
  db.findById("users", email)
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = createToken.generate(user);
        res.status(200).json({ id: user.id, name: user.name, token: token });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
