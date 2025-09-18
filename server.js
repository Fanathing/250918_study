const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const path = `${__dirname}/views/boards`;

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "html");
nunjucks.configure("view", {
    express: app
})

const lists = [
    {
        id: 1,
        userId: "",
        content: ""
    }
]

app.get("/",(req, res) => {
    res.sendFile(`${path}/main.html`)
})

app.get("/boards",(req, res) => {
    res.sendFile(`${path}/list.html`)
})

app.get("/boards/create",(req, res) => {
    res.sendFile(`${path}/create.html`)
})

app.listen(9898,() => {

    console.log("...서버는 켜졌다!");
})