const express = require("express");
const app = express();
const path = `${__dirname}/views/boards`;

app.get("/",(req, res) => {
    res.sendFile(`${path}/main.html`)
})

app.listen(9898,() => {
    console.log("...서버는 켜졌다!");
})