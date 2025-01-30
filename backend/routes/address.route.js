const express = require('express');
const addressRouter = express.Router();
const {
    getAddress,
} = require('../controllers/address.controller');

addressRouter.get('/info', getAddress);

module.exports = addressRouter;