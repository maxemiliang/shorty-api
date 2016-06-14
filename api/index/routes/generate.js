'use strict';

const generateUrl = require('../utils/randUrlGen');
const Joi = require('joi');

module.exports = {
	path: '/api/generate',
	method: 'POST',
	config: {
		handler: (req, res) => {
			let url = req.payload.url
			generateUrl.generateSlug(url, res);
		},
		validate: {
			payload: {
				url: Joi.string().uri().min(4).required()
			}
		}
	}
}
