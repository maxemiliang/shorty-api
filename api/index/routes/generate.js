'use strict';

const generateUrl = require('../utils/randUrlGen');

module.exports = {
	path: '/api/generate',
	method: 'POST',
	config: {
		handler: (req, res) => {

		},
		validate: {
			payload: {

			}
		}
	}
}
