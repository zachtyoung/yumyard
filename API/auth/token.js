const jwt = require("jsonwebtoken");

function generate(user) {
  const payload = {
    subject: user.id,
    username: user.phone,
  };
  const secret = "super secret";
  const opttions = {
    expiresIn: "8h",
  };
  return (token = sign(payload, secret, opttions));
}

exports.generate = generate;
