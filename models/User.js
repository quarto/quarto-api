const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		minlength: [4, 'Username must be 4 characters or more.'],
	},
	password: {
		type: String,
		required: true,
		minlength: [6, 'Password must be 6 characters or more.'],
	},
	email: {
		type: String,
		required: true,
		minlength: [],
	},
	first_name: String,
	last_name: String,
	profile_photo: String,
	sex: {
		type: String,
		enum: ["Male", "Female"]
	},
	birthdate: Date,
	location: String,
	country: String,
	province: String,
	city: String,
	budget: Array,
	rental_type_preferences: Array,
	bio: String,
	rentals: Array,
	following: Array
});

module.exports = mongoose.model('Users', userSchema);
// const User = mongoose.model('User', userSchema);
// export default User;