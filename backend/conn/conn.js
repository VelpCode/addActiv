const mongoose = require("mongoose");
const conn = async (req,res) => {
    
    try {
        await mongoose
        .connect(
        "mongodb+srv://velpmail:skrishna1@cluster0.dsx8qnt.mongodb.net/"
        ).then(() => {
            console.log("Mongoose Authenticated.")
        })
    } catch (error) {
        res.status(400).json({
            message: "Not Connected",
        })
    }
    
};
conn();
