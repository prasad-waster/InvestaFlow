const { Signup, Login } = require("../controller/AuthController");
const { userVerification } = require("../middleware/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

router.get("/verify", userVerification, (req, res) => {
  console.log("Verifying user...");
  console.log("Cookies:", req.cookies);
  console.log("User:", req.user);
  res.json({
    success: true,
    message: "Token is valid",
    user: req.user,
  });
});

module.exports = router;
