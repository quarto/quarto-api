const seedController = {};
var Rental = require('../models/Rental');
var User = require('../models/User');

seedController.seed = (req, res) => {
	var usersSeed = require('../seeds/UsersSeed');

	User.remove({}).then((err, results) => {
		console.log("Done remove");
		console.log(err);
		console.log(results);
		User.create(usersSeed);
	}).then((err, users) => {
		console.log("Done user seed");
		console.log(users);
		res.json('s');
	});

	// clear all
	// User.remove({}).exec((err, results) => {
	// 	// seed
	// 	User.create(usersSeed)
	// 	.then((users) => {
	// 		res.json(users);
	// 	})
	// 	.catch((err) => {
	// 		res.json(err);
	// 	});
	// });
};

module.exports = seedController;