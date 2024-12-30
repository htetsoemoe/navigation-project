const express = require('express');
const directionRouter = express.Router();
const {
    getDirection,
} = require('../controllers/direction.controller');

directionRouter.get("/navigation", getDirection);

module.exports = directionRouter;