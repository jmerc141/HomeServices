const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use(cors({
    origin: '*'
}));

var db = mysql.createConnection({
    host: "homeservices-db.crq86z0yqsqt.us-east-2.rds.amazonaws.com",
    user: "worker",
    password: "workerpassword123",
    port: "3306",
    database: "homeservicesdb"
});

app.post('/register', (req, res) =>{
	const f_name = req.body.f_name;
	const l_name = req.body.l_name;
	const email = req.body.email;
	const password = req.body.password;
	db.query('INSERT INTO user_profiles (email, password, first_name, last_name) VALUES (?,?,?,?)',
		[email, password, f_name, l_name], 
		(err, result) => {
			if(err){
				res.send({isRegistered: false});
			}else{
				res.send({isRegistered: true});
			}
		}
	);
});

app.post('/login', (req, res) =>{
	const email = req.body.email;
	const password = req.body.password;
	db.query('SELECT * FROM user_profiles WHERE email = ? AND password = ?',
		[email, password], 
		(err, row) => {
			if(err){
				console.log(err);
			}else{
				if(row && row.length > 0)
				{
					//res.send({isLoggedIn: true});
					res.send(row);
				}else{
					res.send({isLoggedIn: false});
				}
			}
		}
	);
});

app.post('/delete', (req, res) =>{
	db.query('DELETE FROM user_profiles', 
		(err, result) => {
			if(err){
				console.log(err);
			}else{
			}
		}
	);
});

app.post('/users', (req, res) =>{
	db.query('SELECT email FROM user_profiles', 
		(err, result) => {
			if(err){
				console.log(err);
			}else{
				res.send(result);
			}
		}
	);
});

app.listen(3001, ()=>{
	console.log("Server is running on port 3001.");
})