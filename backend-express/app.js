const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sang224",
  database: "test",
});

app.get("/getAllContact", (req, res) => {
  getAllContact().then((value) => {
    res.send(value);
  });
});

app.post("/insert-contact", (req, res) => {
  console.log("received form data");
  console.log(req.body); // body의 데이터를 요청

  const name = req.body.name;
  const birth = req.body.birthday;
  const description = req.body.description;

  console.log(name);
  console.log(birth);
  console.log(description);

  const query =
    `INSERT INTO contact (name, birthday, description) ` +
    `VALUES ('${name}', '${birth}', '${description}');`;
  console.log("insert query: " + query);

  executeQeury(query)
    .then(() => {
      res.send("insert success");
    })
    .catch((e) => {
      res.send(e);
    });
});

app.listen(port, () => {
  console.log("Connecte to 3001 port");
});

function getAllContact() {
  return new Promise((resolve, reject) => {
    executeQeury("select * from contact;").then((value) => {
      console.log("getAllContact result: ");
      console.log(value);
      resolve(value);
    });
  });
}

function executeQeury(query) {
  return new Promise((resolve, reject) => {
    let result;
    // connection.connect();
    console.log("query: " + query);
    connection.query(query, (err, rows, fields) => {
      if (err) throw err;
      result = rows;
      // connection.end();

      var json = JSON.stringify(result);
      resolve(json);
    });
  });
}
