'use strict';

const Boom = require('boom');
const Url = require('../models/urls');

module.exports = {
	path: '/api/links/{_id}',
	method: 'GET',
	config: {
		handler: (req, res) => {
			let id = req.params._id
			Url.findOne({
				'_id': id
			}, (err, url) => {
				if (err) {
					throw Boom.badRequest(err);
				}
				if (url) {
					res(url)
				} else {
					throw Boom.badRequest('No url found');
				}
			});
		}
	}
}
