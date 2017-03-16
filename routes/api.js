
const express = require('express');
const mongoose = require('mongoose');

// Controllers
const userController = require('./userController');

const apiRoutes = express.Router();

// API routes
apiRoutes.get('/', (req, res) => {
	res.json({message: 'This is the root of the /api route.'});
});

// Users
apiRoutes.get('/users', userController.get);
apiRoutes.get('/users/seed', userController.seed);

module.exports = apiRoutes;