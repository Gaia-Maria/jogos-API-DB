const express = require("express");
const cors = require("cors");
const mongoose = require("./database/mongooseConnect");
const consolesRoutes = require("./routes/consolesRoutes");
const gamesRoutes = require("./routes/gamesRoutes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use(consolesRoutes);
app.use(gamesRoutes);

module.exports = app;
