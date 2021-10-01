const express = require('express');
const os = require('os');
const mysql = require('mysql');
const app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: "3306",
    database: "homeservicetest"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL Server!")
    con.query("SELECT * FROM test", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
