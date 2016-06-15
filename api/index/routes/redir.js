'use strict';

const Boom = require('boom');
const Url = require('../models/urls');

module.exports = {
	path: '/{slug}',
	method: 'GET',
	config: {
		handler: (req, res) => {
			let short = req.params.slug
			console.log(short);
			Url.findOne({
				slug: short
			}, (err, obj) => {
				if (err) {
					throw Boom.badRequest(err);
				}
				if (obj) {
					console.log('Got this far')
					res().redirect(obj.originalUrl);
				} else {
					throw Boom.badRequest('Short url not found');
				}
			})
		}
	}
}
