const rentalController = {};
var Rental = require('../models/Rental');

/* Get all Rental */
rentalController.getAll = (req, res) => {
	Rental.find({})
	.exec()
	.then((rental) => {
		res.json(rentals);
	})
	.catch((err) => {
		res.send('Error displaying list of rentals.');
	});
};

/* Get single Rental */
rentalController.getRental = (req, res) => {
	Rental.findOne({ id: req.params.id })
	.exec()
	.then((rental) => {
		if(rental){
			res.json(rental);
		} else{
			res.status(400).json({error: 'Rental id ' + req.params.id + ' not found.'});
		}
	})
	.catch((err) => {
		res.status(400).json({
			error: 'Error retrieving rental ' + req.params.id + '.',
			info: err
		})
	});
};

/* Create a Rental */
rentalController.createRental = (req, res) => {
	Rental.create(req.body)
	.then((rental) => {
		res.json(rental);
	})
	.catch((err) => {
		res.status(400).json({
			error: 'Failed to create account. See info.',
			info: err
		});
	});
};

/* Edit a Rental */
rentalController.editRental = (req, res) => {
	Rental.findOneAndUpdate(
		{ id: req.params.id },
		req.body,
		{ 
			new: true, // return the new updated rental instead of unaltered rental
			runValidators: true,
		}
	)
	.exec()
	.then((newRental) => {
		if(newRental){
			res.json(newRental);
		} else {
			res.json({error: 'error'});
		}
	})
	.catch((err) => {
		res.status(400).json({
			error: 'Failed to update Rental. See info.',
			info: err
		});
	});
};

/* Delete a Rental */
rentalController.deleteRental = (req, res) => {
	Rental.findOneAndRemove(
		{id: req.params.id},
		{}
	)
	.exec()
	.then((deletedRental) => {
		if(deletedRental){
			res.send(deletedRental);
		} else {
			res.status(400).json({
				error: 'Rental not found. Failed to delete Rental.',
			});
		}
	})
	.catch((err) => {
		res.status(400).json({
			error: 'Failed to delete Rental. See info.',
			info: err
		});
	});
};

/* FOR TESTING ONLY */
/* Seed rentals */
rentalController.seed = (req, res) => {
	var rentalsSeed = require('../seeds/RentalsSeed');

	// clear all
	Rental.remove({}).exec((err, results) => {

		// seed
		Rental.create(rentalsSeed)
		.then((rental) => {
			res.json(rentals);
		})
		.catch((err) => {
			res.json(err);
		});
	});
};

module.exports = rentalController;