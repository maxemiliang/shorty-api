'use strict';

const Boom = require('boom');
const Url = require('../models/urls');

module.exports = {
	path: '/api/list',
	method: 'GET',
	config: {
		handler: (req, res) => {
			Url.find({}, (err, url) => {
				if (err) {
					throw Boom.badRequest(err)
				}
				if (url) {
					res(url);
				}
			});
		}
	}
}
