const express = require("express");
const faker = require("faker");
const app = express();
const bodyParser = require("body-parser");


app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false}));
let users = [];

for (let i = 0; i <5; i++){
    users.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        image: faker.image.image()
    })
}


app.get("/", (req, res)=>{
    
    res.render("home.ejs", {users});
})

app.get("/form", (req, res)=>{
    
    res.render("form.ejs", {users});
})

app.post("/user/add", (req, res)=>{
    users.push({
        name: req.body.name,
        email: req.body.email,
        image: faker.image.image()
    })
    res.redirect("/");
})

app.listen(3000, ()=>{
    console.log("App is listening on port 3000");
})