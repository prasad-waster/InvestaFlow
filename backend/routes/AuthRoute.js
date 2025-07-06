const { Signup, Login } = require("../controller/AuthController");
const { userVerification } = require("../middleware/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);

router.get("/verify", userVerification, (req, res) => {
  res.json({
    success: true,
    message: "Token is valid",
    user: req.user,
  });
});

module.exports = router;
