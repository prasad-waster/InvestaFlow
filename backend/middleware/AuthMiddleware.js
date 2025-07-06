const jwt = require("jsonwebtoken");

const userVerification = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: "Invalid token" });
    }
    req.user = decoded.id;
    next();
  });
};

module.exports = { userVerification };
