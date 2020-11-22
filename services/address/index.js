const fetch = require('node-fetch');

function getAddresses(lat, lng, dist) {
	return fetch(`https://api.openchargemap.io/v3/poi/?output=json&countrycode=DE&compact=true&verbose=false&latitude=${lat}&longitude=${lng}&distance=${dist}&distanceunit=KM`)
		.then(res => res.json())
		.then(data => {
			return  data.map(address => {
				return {
					lat: address.AddressInfo.Latitude,
					lng: address.AddressInfo.Longitude,
					addressName: address.AddressInfo.Title
				}
			});
		});
}

module.exports = { getAddresses }
