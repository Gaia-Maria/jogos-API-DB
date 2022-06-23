const controller = require('../controller/gamesController');
const express = require('express');

const router = express.Router();

router.get("/games", controller.findAllGames);

router.get("/games/:id", controller.findGameById);

router.post("/games/add", controller.addNewGame);

router.patch("/games/:id", controller.updateGame);

router.delete("/games/:id", controller.deleteGame);

module.exports = router