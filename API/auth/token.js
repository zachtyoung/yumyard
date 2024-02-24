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
  return (token = jwt.sign(payload, secret, opttions));
}
module.exports = {
  generate,
};
