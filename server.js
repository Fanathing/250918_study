const express = require("express");
const app = express();

app.get("/",(req, res) => {
    console.log(req.body);
    
})

app.listen(9898,() => {
    console.log("...서버는 켜졌다!");
})