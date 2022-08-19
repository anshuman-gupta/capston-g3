const jwt = require("jsonwebtoken");

function authentication(req, res, next) {
  console.log("Cookies: ", req.cookies.jwttoken);
  try {
    const token = req.cookies.jwttoken;
    const result = jwt.verify(token, "abhisecret");
    req.token = result;
    console.log(req.token.user_type);
    next();
  } catch (err) {
    res.send("Already Logout");
  }
}
module.exports = authentication;
