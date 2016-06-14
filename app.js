'use strict';

const Hapi = require('Hapi');
const mongoose = require('mongoose');
const Boom = require('boom');
const glob = require('glob');
const path = require('path');
const server = new Hapi.Server();

// Setup hapi server
server.connection({
	port: process.env.PORT || 1337
});

const db = 'shorty-api';

const dbUrl = 'mongodb://localhost:27017/' + db;

glob.sync('api/**/routes/*.js', {
	root: __dirname
}).forEach(file => {
	const route = require(path.join(__dirname, file));
	server.route(route);
});

// Start the server
server.start((err) => {
	if (err) {
		throw err;
	}
	// Make a connection to the mongodb server
	mongoose.connect(dbUrl, {}, (err) => {
		if (err) {
			throw err;
		}
	});
	console.log('Server started');
});
