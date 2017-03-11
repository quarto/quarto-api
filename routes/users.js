const express = require('express');
const mongoose = require('mongoose');

const usersRoute = express.Router();

 // /api/users routes
usersRoute.get('/', (req, res) => {
	res.json({
		users: ['user1', 'user2', 'user3']
	});
});

module.exports = usersRoute;