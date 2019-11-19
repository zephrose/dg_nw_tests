const testUtil = require('../../utils/test_utils.js');
const data = require('./../../data/data.json');

const socialMediaLinks = [];
let clientPhoneNum = "";

module.exports = {

	'before' : function (client) {

		client.useXpath();

		// Log user in here
		testUtil.goToUrl(client, data.hosts.url_demo);	

		client.getAttribute(data.site.client_phone.number, "textContent", function(clientNumber) {
			// console.log(clientNumber.value);
			clientPhoneNum = clientNumber.value;
		});

		for(let i = 1; i <= 4; i++){
			client.getAttribute(data.site.social_link.wrapper+"/a["+ i +"]", "href", function(link){
				let socialLink = link.value;
				// console.log(socialLink);
				if (!socialLink.includes("pinterest")) {
					if (!socialLink.includes("twitter")) {
						socialMediaLinks.push(socialLink);	
					}					
				}
			});	
		}

	},

	'after' : function (client) {

		// close out and clean up webdriver
		testUtil.cleanAndClose(client);

	},

	'test_client_number' : function (client) {

		console.log("Testing the following -- ")
		console.log("Client Number : " + clientPhoneNum);
		console.log("Client Links : " + socialMediaLinks);

		socialMediaLinks.forEach(function(link){
			testUtil.goToUrl(client, link);
			client.source(function(src) {
				client.assert.equal(true, src.value.includes(clientPhoneNum), "Client Number found on " + link)
			});
		});

	}

}