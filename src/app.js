const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

var items = ["cook food", "eat food"];
app.use(express.static("public"));
app.get("/", (req, res) => {
    const today = new Date();

    const option = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    var day = today.toLocaleDateString("en-US", option);

    res.render("list", { kindOfDay: day, newListItem: items });
});

app.post("/", (req, res) => {
    item = req.body.newItem;

    items.push(item);

    //redirecting
    res.redirect("/");
    // console.log(item);
});

app.listen("8000", () => {
    console.log("server is runing on port no 8000 ");
});