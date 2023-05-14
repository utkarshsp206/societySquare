const express = require("express");
const path = require("path")
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./model/registers")
const Contact = require("./model/contacts")

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path))
app.set("view engine", "hbs")
app.set("views", template_path)
hbs.registerPartials(partials_path)

app.use(express.json());
app.use(express.urlencoded({ extended: false }))


// GET REQUESTS
// All the get requests are in router.js file
app.use("/",require("./router"))

// POST REQUESTS 
app.post("/register", async (req, res) => {
    try {
        const registerEmployee = new Register({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.passoword
        })
        const registered = await registerEmployee.save();
        res.status(201).render("index");

    } catch (error) {
        res.status(400).send(error)
    }
})


app.post("/contact", async (req, res) => {
    try {
        const contact = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        const contacted = await contact.save();
        res.status(201).render("index");

    } catch (error) {
        res.status(400).send(error)
    }
})


app.listen(port, () => {
    console.log(`Server is running on port number ${port}`)
})