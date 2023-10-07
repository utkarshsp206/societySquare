const express = require("express");
const path = require("path")
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./model/registers")
const adminRegister = require("./model/adminRegisters")
const Contact = require("./model/contacts")
const Visitor = require("./model/visitors")

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
app.get("/visitor", (req, res) => {
    res.render("visitor")
})
app.get("/adminRegister", (req, res) => {
    res.render("adminRegister")
})
app.get("/adminLogin", (req, res) => {
    res.render("adminLogin")
})


// All the get requests are in router.js file
app.use("/", require("./router"))

// POST REQUESTS 
app.post("/register", async (req, res) => {
    try {
        const registerResident = new Register({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        })
        const registered = await registerResident.save();
        res.status(201).render("login");

    } catch (error) {
        res.status(400).send(error)
    }
})
app.post("/adminRegister", async (req, res) => {
    try {
        const registerAdmin = new adminRegister({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        })
        const registered = await registerAdmin.save();
        res.status(201).render("adminLogin");

    } catch (error) {
        res.status(400).send(error)
    }
})

app.post("/login",async(req,res)=>{
    try {
        
        const username = req.body.username;
        const password = req.body.password;

        const userUsername= await Register.findOne({username:username});
        
        if(userUsername.password==password){
            res.status(201).render("userHome")
        }else{
            res.send("Invalid Login Password")
        }


    } catch (error) {
        res.status(400).send("Invalid Login")
    }
})
app.post("/adminLogin",async(req,res)=>{
    try {
        
        const username = req.body.username;
        const password = req.body.password;

        const adminUsername= await adminRegister.findOne({username:username});
        
        if(adminUsername.password==password){
            res.status(201).render("adminHome")
        }else{
            res.send("Invalid Login Password")
        }


    } catch (error) {
        res.status(400).send(error)
        console.log(error)
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

app.post("/visitor", async (req, res) => {
    try {
        const visitor = new Visitor({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address
        })
        const visited = await visitor.save();
        res.status(201).render("visitor");

    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
})


app.listen(port, () => {
    console.log(`Server is running on port number ${port}`)
})