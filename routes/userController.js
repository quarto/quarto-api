const userController = {};
var User = require('../models/User');

userController.get = (req, res) => {
	User.find({})
	.exec()
	.then((users) => {
		res.json(users);
	})
	.catch((err) => {
		res.send('Error displaying list of users.');
	});
};

userController.seed = (req, res) => {
	var usersSeed = require('../seeds/UsersSeed');

	// clear all
	User.remove({}).exec((err, results) => {
		// seed
		User.create(usersSeed, (err, users) => {
			if(err){
				res.send(err);
			} else{
				res.send(users);
			}
		});
	});
};

module.exports = userController;