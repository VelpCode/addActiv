const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

//SIGN in

router.post("/register", async(req,res) => {
    try {
        const { email, username, password }= req.body;
        const hashpassword = bcrypt.hashSync(password);
        const user = new User({ email, username, password });
        await user.save().then(() => res.status(200).json({ user: user }));
        } catch(error) {
            res.status(400).json({ message: "User Already Exists" });
        }
    
})

//

router.post("/signin", async(req,res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(!user) {
            res.status(400).json({ message: "Please Sign Up First" })
        }

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password, 
            user.password
            );
            if(!isPasswordCorrect) {
                res.status(400).json({ message: "Password is not correct" })
            }
            const {password, ...others} = users._doc;
            res.status(400).json({ others });
        } catch(error) {
          res.status(400).json({ message: "User Already Exists" });
    }
    
})

module.exports = router;