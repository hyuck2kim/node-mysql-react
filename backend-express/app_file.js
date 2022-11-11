const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const { application } = require("express");
const app = express();
const port = 3000;

app.locals.pretty = true;
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", "./views_file");
app.set("view engine", "jade");
app.get("/topic/new", (req, res) => {
  res.render("new");
});

app.get("/topic", (req, res) => {
  fs.readdir("data/", (err, files) => {
    if (err) {
      console.log(err);
      res.sendStatus(500).send("Internal Server Error");
    }
    res.render("view", { topics: files });
  });
});

app.get("/topic/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile("data/" + id, "utf8", (err, data) => {
    res.send(data);
  });
});

app.post("/topic", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  fs.writeFile("data/" + title, description, (err) => {
    if (err) {
      res.sendStatus(500).send("Internal Server Error");
    }
    res.send("Sucess!");
  });
});

app.listen(port, () => {
  console.log("Connecte to 3000 port");
});
