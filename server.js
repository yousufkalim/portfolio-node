//Init
require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const port = process.env.PORT || 5000;
require("./database");

// Middleware
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cors({ credentials: true }));

//Routes
app.use("/", routes);

// Server Listen
app.listen(port, () => {
	console.log(`Server is runnig at port ${port}`);
});
