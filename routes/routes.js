const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/', (req, res) => {
	res.json({message: 'Hello this is the root route.'});
});

router.use('/api', require('./api'));

module.exports = router;