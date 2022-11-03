'use strict';

const express = require('express');
const router = express.Router();
const {CvLocal} = require("../controllers/controller");







router.get('/CvLocal', CvLocal) ;


module.exports = {
    routes: router
}