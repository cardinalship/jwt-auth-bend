const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
dotenv.config();
//
app.use(bodyParser.json());
// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(
	"mongodb://localhost/jwt-db",
	{ useNewUrlParser: true },
	() => {
		console.log("connected to jwt-db");
	}
);

// geting the route
const registerRoute = require("./route/register");
const login = require("./route/login");
const logout = require("./route/logout");
const homeRoute = require("./route/home");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api", registerRoute);
app.use("/api", login);
app.use("/api", logout);
app.use("/api",homeRoute);

app.listen(4040, () => {
	console.log("server is online");
});
