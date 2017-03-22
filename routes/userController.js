const userController = {};
var User = require('../models/User');

/* Get all User */
userController.getAll = (req, res) => {
	User.find({})
	.then((users) => {
		res.json(users);
	})
	.catch((err) => {
		res.send('Error displaying list of users.');
	});
};

/* Get single User */
userController.getUser = (req, res) => {
	User.findOne({ username: req.params.username })
	.exec()
	.then((user) => {
		if(user){
			res.json(user);
		} else{
			res.status(400).json({error: 'User ' + req.params.username + ' not found.'});
		}
	})
	.catch((err) => {
		res.status(400).json({
			error: 'Error retrieving user ' + req.params.username + '.',
			info: err
		})
	});
};

/* Create a User */
userController.createUser = (req, res) => {
	User.create(req.body)
	.then((user) => {
		res.send(user);
	})
	.catch((err) => {
		res.status(400).json({
			error: 'Failed to create account. See info.',
			info: err
		});
	});
};

/* Edit a User */
userController.editUser = (req, res) => {
	User.findOneAndUpdate(
		{ username: req.params.username },
		req.body,
		{ 
			new: true, // return the new updated user instead of unaltered user
			runValidators: true,
		}
	)
	.exec()
	.then((newUser) => {
		if(newUser){
			res.json(newUser);
		} else {
			res.json({error: 'error'});
		}
	})
	.catch((err) => {
		res.status(400).json({
			error: 'Failed to update user. See info.',
			info: err
		});
	});
};

/* Delete a User */
userController.deleteUser = (req, res) => {
	User.findOneAndRemove(
		{username: req.params.username},
		{}
	)
	.exec()
	.then((deletedUser) => {
		if(deletedUser){
			res.send(deletedUser);
		} else {
			res.status(400).json({
				error: 'User not found. Failed to delete user.',
			});
		}
	})
	.catch((err) => {
		res.status(400).json({
			error: 'Failed to delete user. See info.',
			info: err
		});
	});
};

module.exports = userController;