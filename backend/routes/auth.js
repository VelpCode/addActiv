const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Environment variable for JWT_SECRET
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Replace 'your_jwt_secret' with a real secret key

//SIGN UP
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    // Hash password
    const hashpassword = bcrypt.hashSync(password, 12);
    const user = new User({ email, username, password: hashpassword });
    await user.save();
    res.status(200).json({ message: "Sign Up Successful" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//SIGN IN
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found. Please Sign Up First" });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Password is not correct" });
    }

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    const { password: userPassword, ...others } = user._doc;
    res.status(200).json({ user: others, token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;