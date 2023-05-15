const express = require("express")
const route = express.Router()
const controller = require('./model/controller')
const axios = require('axios')


route.get("/", (req, res) => {
    res.render("index")
})
route.get("/register", (req, res) => {
    res.render("register")
})
route.get("/landing", (req, res) => {
    res.render("landing")
})
route.get("/about", (req, res) => {
    res.render("about")
})
route.get("/adminHome", (req, res) => {
    res.render("adminHome")
})
route.get("/userHome", (req, res) => {
    res.render("userHome")
})
route.get("/contact", (req, res) => {
    res.render("contact")
})
route.get("/manageFlats", (req, res) => {
    res.render("manageFlats")
})
route.get("/manageResidents", (req, res) => {
    res.render("manageResidents")
})
route.get("/manageBills", (req, res) => {
    res.render("manageBills")
})
route.get("/manageVisitors", (req, res) => {
    res.render("manageVisitors")
})
route.get("/complaints", (req, res) => {
    res.render("complaints")
})
route.get("/add_user", (req, res) => {
    res.render("add_user")
})
route.get("/bills", (req, res) => {
    res.render("bills")
})
route.get("/resident", (req, res) => {
    res.render("resident")
})
route.get("/complainTable", (req, res) => {
    res.render("complainTable")
})
route.get("/suggestionTable", (req, res) => {
    res.render("suggestionTable")
})
route.get("/suggestion", (req, res) => {
    res.render("suggestion")
})
route.get("/profile", (req, res) => {
    res.render("profile")
})
route.get("/login", (req, res) => {
    res.render("login")
})


route.get("/notices", (req, res) => {
    axios.get('http://localhost:3000/api/users')
        .then(function (response) {
            res.render('notices', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        })
})

// route.post("/visitors", (req,res)=>{
//     if (!req.body) {
//         res.status(400).send({ message: "Content can not be emtpy!" });
//         return;
//     }

//     // new user
//     const visitor = new Visitor({
//         name: req.body.name,
//         phone: req.body.phone,
//         gender: req.body.gender
//     })

//     // save user in the database
//     user
//         .save(user)
//         .then(data => {
//             //res.send(data)
//             res.redirect('/add_visitor');
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while creating a create operation"
//             });
//         });
// })




//API
route.post('/api/users', controller.create)
route.get('/api/users', controller.find)



module.exports = route