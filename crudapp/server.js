const express = require("express");
const dotenv = require("dotenv")
const morgan = require("morgan")
const app = express();

dotenv.config({path: "config.env"})
const PORT = process.env.PORT|| 4000

app.use(morgan("tiny"))
app.use(bodyparser.urlencoded({extended: true}))

app.get ("/", (req, res) => {
res.send("This is a project little miss is working on")
})


app.set("view engine", "ejs")


app.get("/", (req, res)=>{
    res.render("index")
})


app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`);
})