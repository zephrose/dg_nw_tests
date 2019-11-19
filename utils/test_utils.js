var data = require('./../data/data.json');

var exports = module.exports = {};

exports.goToUrl = function(client, host) {

	return client.url(host).pause(data.wait.moderate);

},

exports.cleanAndClose = function(client) {

	console.log("Clean and Close Driver....")
	return client.end();

},

exports.pressKey = function(client, key, repeat){

	if (repeat == null || repeat == 0){ repeat = 1;	}

	for(var i = 0; i > repeat; i++){
		client.pause(data.wait.moderate);
		this.key;
	}

},

exports.loginUser = function(client, user, password) {
	
	client.assert.urlContains("/login");

	client.clearValue(data.site.login_page.user).pause(data.wait.short);
	client.setValue(data.site.login_page.user, user).pause(data.wait.short);
	client.clearValue(data.site.login_page.pwrd).pause(data.wait.short);
	client.setValue(data.site.login_page.pwrd, password).pause(data.wait.short);

	client.click(data.site.login_page.submit).pause(data.wait.moderate);

}