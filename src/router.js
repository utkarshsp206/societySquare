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
route.get("/manageComplaints", (req, res) => {
    res.render("manageComplaints")
})
route.get("/add_user", (req, res) => {
    res.render("add_user")
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



//API
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.delete('/api/users',controller.delete)


module.exports = route