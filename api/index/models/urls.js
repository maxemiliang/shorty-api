'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlModel = new Schema({
	originalUrl: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	slug: {
		type: String,
		required: true,
		index: {
			required: true
		}
	},
	createdAt: {
		type: Date,
		required: true
	}
});

module.exports = mongoose.model('Url', urlModel, 'urls');
