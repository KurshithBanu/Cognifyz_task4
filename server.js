const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs"); //dynamic html content rendering

app.get("/", (req, res) => {  //route to form page
    res.render("index");
});

app.post("/submit", (req, res) => { //route to thank you page
    res.redirect("/thankyou");
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
