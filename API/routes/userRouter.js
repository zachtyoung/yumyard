const express = require("express");
const db = require("../database/models/global-model.js");
const bcrypt = require("bcryptjs");
// const restricted = require('../auth/auth-middleware');
const router = express.Router();
const createToken = require("../auth/token.js");

router.get("/", (req, res) => {
  db.get()
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
  db.insert(user)
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
  let { phone, password } = req.body;
  db.getBy({ phone })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = createToken.genToken(user);
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
