require("dotenv").config();

const express = require("express");
const connection = require("./src/database");

const Place = require("./src/models/places");
const User = require("./src/models/users");

const log = require("./src/middlewares/log");
const validateNewUser = require("./src/middlewares/validateNewUser");
const validateToken = require("./src/middlewares/validateToken");

const createPlaces = require("./src/controllers/places/createPlaces");
const deletePlaces = require("./src/controllers/places/deletePlaces");
const findPlaces = require("./src/controllers/places/findPlaces");
const updatePlaces = require("./src/controllers/places/updatePlaces");

const createUsers = require("./src/controllers/users/createUsers");
const loginUsers = require("./src/controllers/users/loginUsers");

const app = express();

app.use(express.json());
app.use(log);

connection.authenticate();
connection.sync({ alter: true });

app.post("/places", createPlaces);
app.get("/places", validateToken, findPlaces);
app.delete("/places/:id", validateToken, deletePlaces);
app.put("/places/:id", validateToken, updatePlaces);

app.post("/users", validateNewUser, createUsers);
app.post("/sessions/:username/:password", loginUsers);

app.listen(3333, () => {
  console.log("Aplicação Online!");
});
