var assert = require("assert"),
	vine = require("./lib/vine.js");

describe("login", function() {

	var username = process.env.VINE_USERNAME,
		password = process.env.VINE_PASSWORD;

	it("should login via POST /users/authenticate", function(next) {
		vine.login(username, password, function(err, response) {
			assert.ok(response);
			next();
		});
	});

	it("should fail if no username or password is specified", function(next) {
		vine.login(null, null, function(err, response) {
			assert.ok(err);
			assert.ok(!response);
			next();
		});
	});

	it("should fail if only username is specified", function(next) {
		vine.login(username, null, function(err, response) {
			assert.ok(err);
			assert.ok(!response);
			next();
		});
	});

	it("should fail if only password is specified", function(next) {
		vine.login(null, password, function(err, response) {
			assert.ok(err);
			assert.ok(!response);
			next();
		});
	});

	it("should fail if wrong username is entered", function(next) {
		vine.login("aSasdfjaiosdfja!asdfasDafsasdf", password, function(err, response) {
			assert.ok(err);
			assert.ok(!response);
			next();
		});
	});

	it("should fail if wrong password is entered", function(next) {
		vine.login(username, "asdf!!f1jf1Qsdfasd@`casf", function(err, response) {
			assert.ok(err);
			assert.ok(!response);
			next();
		});
	});
});


/*var vine = require("./lib/vine.js"),
	username = process.env.VINE_USERNAME,
	password = process.env.VINE_PASSWORD;

vine.login(username, password, function(err, response) {
	
	vine.timeline(function(err, response) {
		// Works
	});

	vine.popular(function(err, response) {
		// Works
	});

	vine.promoted(function(err, response) {
		// Works
	});

	vine.tags("funny", function(err, response) {
		// Works
	});

	vine.search("cats", function(err, response) {
		// Works
	});

	vine.settings(function(err, response) {
		// Works
	});
});
*/