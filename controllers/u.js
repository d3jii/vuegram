var ig = require('instagram-node').instagram();
ig.use({ access_token: '18360510.5b9e1e6.de870cc4d5344ffeaae178542029e98b' });
// ig.use({ client_id: '93f523ce97124222b3776dedc3007aeb',
//          client_secret: 'YOUR_CLIENT_SECRET' });

function timeline(req, res, next) {
	ig.user('303359809', function(err, result, remaining, limit) {
		console.log(arguments);
	});
}

exports.timeline = timeline;