const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const User = require("./model/user");
const { tr } = require("faker/lib/locales");

mongoose.connect('mongodb://localhost:27017/assignment_4');
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride('_method'))

app.get("/", async (req, res)=>{
    const users = await User.find({});
    res.render("home.ejs", {users});
})

app.get("/form", (req, res)=>{
    res.render("form.ejs");
})

app.post("/users/add", async (req, res)=>{
    await User.create({
        name: req.body.name,
        email: req.body.email,
        isPromoted: req.body.isPromoted
    })
    // console.log(req.body);
    res.redirect("/");
})

app.put("/users/:id/isPromoted", async (req, res)=>{
    // req.body.isPromoted? {isPromoted:false}: {isPromoted:true}
    await User.updateOne({_id: req.params.id}, {isPromoted:true} )
    res.redirect("/")
})

app.put("/users/:id/demote", async(req, res)=>{
    await User.updateOne({_id:req.params.id}, {isPromoted:false})
    res.redirect("/");
})

app.delete("/users/:id/delete", async (req, res)=>{
    await User.deleteOne({_id: req.params.id});
    res.redirect("/");
})

app.listen(3000, ()=>{
    console.log("App is listening on port 3000");
})