'use strict';

const Url = require('../models/urls.js');
const mongoose = require('mongoose');
const Boom = require('boom');

function generateSlug(url, res) {
	let str = (Math.random().toString(36) + '00000000000000000').slice(2, 7);
	Url.findOne({
		slug: str
	}, (err, slug) => {
		if (err) {
			Boom.badRequest(err)
		}
		if (!slug) {
			let obj = new Url;
			obj.originalUrl = url;
			obj.slug = str;
			obj.createdAt = new Date();
			obj.save((obj, err) => {
				if (err) {
					throw Boom.badRequest(err)
				}
				res({
					status: 'generated',
					shorty: str,
					originalUrl: url
				})
			})
		} else {
			generateSlug(url)
		}
	});
}


module.exports = {
	generateSlug: generateSlug
};
