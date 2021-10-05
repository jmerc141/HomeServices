const express = require('express');
const os = require('os');
const mysql = require('mysql');
const app = express();

var con = mysql.createConnection({
    host: "homeservices-db.crq86z0yqsqt.us-east-2.rds.amazonaws.com",
    user: "worker",
    password: "workerpassword123",
    port: "3306",
    database: "homeservicesdb"
  });
  
  let x;
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL Server!")
    con.query("SELECT * FROM user_profiles", function (err, result, fields) {
      if (err) throw err;
        console.log(result);
    });
  });

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
