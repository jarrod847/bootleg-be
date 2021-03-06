const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
// const { auth } = require("express-openid-connect");
const playerRouter = require("./api/player/player-router");
const monsterRouter = require("./api/monster/monster-router");
const atkRouter = require("./api/attack/attack-router");
const wpnRouter = require("./api/weapon/weapon-router");
const locRouter = require("./api/location/location-router");
require("dotenv").config();
// server.use(
//   auth({
//     authRequired: false,
//     auth0Logout: true,
//     issuerBaseURL: process.env.ISSUER_BASE_URL,
//     baseURL: process.env.BASE_URL,
//     clientID: process.env.CLIENT_ID,
//     secret: process.env.SECRET,
//   })
// );

// server.get("/", (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
// });

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/player", playerRouter);
server.use("/monster", monsterRouter);
server.use("/atk", atkRouter);
server.use("/wpn", wpnRouter);
server.use("/loc", locRouter);

module.exports = server;
