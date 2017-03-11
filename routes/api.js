
const express = require('express');
const mongoose = require('mongoose');

const apiRoutes = express.Router();

 // /api/ routes
apiRoutes.get('/', (req, res) => {
	res.json({message: 'This is the root of the /api route.'});
});

apiRoutes.use('/users', require('./users'));

module.exports = apiRoutes;