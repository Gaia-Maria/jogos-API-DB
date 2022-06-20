const controller = require('../controller/consolesController');
const express = require('express');

const router = express.Router();

//get
router.get("/consoles", controller.findAllConsoles);
router.get("/consoles/:id", controller.findConsoleById);
//post
router.post("/consoles/add", controller.addNewConsole);
router.patch("/consoles/:id", controller.updateConsole)
//delete
router.delete("/consoles/:id", controller.deleteConsole)

module.exports = router