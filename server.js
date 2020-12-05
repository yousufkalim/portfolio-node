//Init
require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const contacts = require("./controllers/contacts");
const port = process.env.PORT || 5000;
require("./database");

// Middleware
app.use("/upload", express.static("upload"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cors({ origin: "http://localhost:3000" }));

//Routes
app.use("/contact", contacts);

// Default Route
app.get("/", (req, res) => {
	res.json({ Message: "This route is running" });
});

// Server Listen
app.listen(port, () => {
	console.log(`Server is runnig at port ${port}`);
});
