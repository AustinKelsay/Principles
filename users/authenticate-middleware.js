const jwt = require("jsonwebtoken");
const secret = require("./secrets");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) { 
    jwt.verify(authorization, secret.jwtSecret, (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.status(401).json({ you: "shall not pass!" });
      } else {
        req.token = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({
      message:
        "You are not logged in",
    });
  }
};