const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const secret = process.env.JWT_SECRET || "Satoshi Nakamoto";
    if (token) {
      jwt.verify(token, secret, (err, decodedToken) => {
        console.log(`inside verify`)
        if (err) {
        console.log(`inside if`)
  
          res.status(401).json({ message: "Not Allowed" });
        } else {
        console.log(`inside else`)
  
          req.jwt = decodedToken;
          console.log(req.jwt)
          next();
        }
      });
    } else {
      res.status(401).json({ message: "No token!" });
    }
  };