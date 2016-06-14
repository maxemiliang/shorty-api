'use strict';

const Boom = require('boom');
const Url = require('../models/urls');

module.exports = {
	path: '/{slug}',
	method: 'GET',
	config: {
		handler: (req, res) => {
			let short = req.query.slug
			Url.findOne({
				slug: short
			}, (err, obj) => {
				if (err) {
					throw Boom.badRequest(err);
				}
				if (obj) {
					console.log('Got this far')
					res.redirect(obj.originalUrl);
				} else {
					console.log('RIP');
				}
			})
		}
	}
}
