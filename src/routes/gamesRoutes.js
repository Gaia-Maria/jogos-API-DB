const controller = require('../controller/gamesController');
const express = require('express');

const router = express.Router();

//get
router.get("/games", controller.findAllGames);
router.get("/games/:id", controller.findGameById);
//post
router.post("/games/add", controller.addNewGame);
//patch
router.patch("/games/:id", controller.updateGame);
//delete
router.delete("/games/:id", controller.deleteGame);

module.exports = router