const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
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
		unique: true,
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
	following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	is_deleted: {
		type: Boolean,
		default: false
	}
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	},
});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);