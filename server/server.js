"use strict";
// Agafem en constants totes les llibreries
const express = require("express");
const bodyParse = require("body-parser");
const mysql = require("mysql");
const app = express();
const path = require("path")

const connection = mysql.createConnection({
	host: "localhost",
	database: "testm06",
	user: "root",
	password: "",
});

app.use('/', express.static(path.join(__dirname, 'views/')))
//app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

// GET
app.get("/hello", (request, response) => {
	response.send({ message: "Hola mon! (GET)" });
});
app.get("/hello/:name", (name, response) => {
	var nom = name.params.name;
	response.send({ message: `Hola ${nom} (GET)` });
});

app.get("/api/login", function (req, res) {
	console.log("estem a login");

	//provem de connectar-nos i capturar possibles errors
	connection.connect(function (err) {
		if (err) {
			console.error("Error connecting: " + err.stack);
			return;
		}
		console.log("Connected as id " + connection.threadId);
	});

	connection.query("SELECT * FROM clients", function (error, results, field) {
		if (error) {
			res.status(400).send({ resultats: null });
		} else {
			/*COMPROVACIÓ DE DADES PER CONSOLA DE NODE*/
			//   console.log(results);
			//   results.forEach(result => {
			//     console.log(result.user);
			//   })

			res.status(200).send({ resultats: results });
		}
	});
	connection.end();
});
app.listen(3000, () => {
	console.log(
		"Aquesta és la nostra API-REST que corre en http://localhost:3000"
	);
});

// // POST
// app.post("/hello", (request, response) => {
// 	response.send({ message: "Hola mon! (POST)" });
// });
// app.post("/address", (request, response) => {
// 	// Recollim els valors que venen des d'un post (xhr.send)
// 	var recollida = request.body;
// 	var ciutat = request.body.ciutat;
// 	console.log(recollida, "\n", ciutat);

// 	response.send({ message: "Tot ok" });
// });
