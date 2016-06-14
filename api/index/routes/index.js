'use strict';

module.exports = {
	path: '/api',
	method: 'GET',
	handler: (req, res) => {
		res({
			status: 'API Functional'
		});
	}
}
