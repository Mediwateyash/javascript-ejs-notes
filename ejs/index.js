const { log } = require("console");
const express = require("express");
const app = express(); // express app
const path = require("path"); // used to get the path

const port = 3000;

    app.set("view engine","ejs");   
    app.set("views",path.join(__dirname,"views")); // views folder //this is use 
//is use to set the path of the views folder


    // routes 
    app.get("/",(req,res)=>{
        res.render("Home.ejs") // render the home page
})


app.get("/ig/:username",(req,res)=>{
    let {username} = req.params
  const instadata = require("./data.json")
  const data = instadata[username]
  console.log(data)
    res.render("instagram.ejs",{data})
})



app.get("/rolldice",(req,res)=>{
    let dicevalue = Math.floor(Math.random()*6)+1
    res.render("rolldice.ejs",{num:dicevalue})
})

app.listen(3000,()=>{                                       // web browser listens to requests at port 3000
    console.log("Server is up and running at port 3000.")
})
