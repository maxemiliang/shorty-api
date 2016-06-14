'use strict';

const Url = require('../models/urls.js');
const mongoose = require('mongoose');

function generateSlug(url) {
	let str = Math.random().toString(36).substr(2, 5);
	Url.findOne({
		slug: str
	}, (err, slug) => {
		if (!slug) {
			let obj = new Url;
			obj.originalUrl = url;
			obj.slug = str;
			obj.createdAt = new Date();
			Url.save((obj, err) => {
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
