const express = require('express');
const mongoose = require('mongoose');

// Models
const User = require('../models/User');

// Controllers
const userController = require('./userController');
const seedController = require('./seedController');
const rentalController = require('./rentalController');

const apiRoutes = express.Router();

// API routes
apiRoutes.get('/', (req, res) => {
	res.json({message: 'This is the root of the /api route.'});
});

// Seed
apiRoutes.get('/seed', seedController.seed);

// Users
apiRoutes.get('/users', userController.getAll);
apiRoutes.get('/users/:username', userController.getUser);
apiRoutes.post('/users/', userController.createUser);
apiRoutes.put('/users/:username', userController.editUser);
apiRoutes.delete('/users/:username', userController.deleteUser);

// Rentals
apiRoutes.get('/rentals/seed', rentalController.seed);
apiRoutes.get('/rentals', rentalController.getAll);
apiRoutes.get('/rentals/:id', rentalController.getRental);
apiRoutes.post('/rentals/', rentalController.createRental);
apiRoutes.put('/rentals/:id', rentalController.editRental);
apiRoutes.delete('/rentals/:id', rentalController.deleteRental);

module.exports = apiRoutes;