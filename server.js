const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const path = `${__dirname}/views/boards`;

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "html");
nunjucks.configure("views", {
    express: app
})


const now = new Date();
const date = `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}`

const lists = [];


app.get("/",(req, res) => {
    res.sendFile(`${path}/main.html`)
})

app.get("/boards",(req, res) => {
    res.render("boards/list.html", {
        lists
    })
})

app.get("/boards/create",(req, res) => {
    res.sendFile(`${path}/create.html`)
})

app.post("/boards/create", (req, res) => {
    
    lists.push({
        ...req.body,
        id: lists.length +1,
        date: date
    });

    console.log(lists);
    
    res.redirect("/boards")
})

app.listen(9898,() => {

    console.log("...서버는 켜졌다!");
})