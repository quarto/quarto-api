const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Port
var port = process.env.PORT || 8080;

// Setup mongoose
const db = 'mongodb://localhost/dbname';
mongoose.Promise = global.Promise;
mongoose.connect(db);

// Router
app.use('/', require('./routes/routes'));

// Start server
app.listen(port, () => {
	console.log('Server running on port ' + port)
})