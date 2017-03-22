const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

var RentalSchema = new Schema({
	user_id: { 
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	name: {
		type: String,
		required: true,
	},
	description: String,
	photos: Array,
	monthly_rate: Number,
	rental_type: {
		// type: Schema.Types.ObjectId,
		// ref: 'RentalType',
		type: String,
		required: true
	},
	location: String,
	country: String,
	province: String,
	city: String,
	minimum_stay_months: Number,
	amenities: { type: Schema.Types.ObjectId, ref: 'Amenity' },
	max_tenants: Number,
	rooms_count: Number,
	restrictions: { type: Schema.Types.ObjectId, ref: 'Restriction' },
	followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
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

RentalSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Rental', RentalSchema);