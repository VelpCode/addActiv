const express = require("express")
const app = express();
require("./conn/conn")

app.get("/", (req,res) => {
    res.send("Hello Server.")
})

app.listen(1000, () => {

    console.log("Server is up.")

})
