module.exports = function getIPAdress(req) {
	if(req.connection.remoteAddress.split("f:")[1] != "127.0.0.1") {
		return req.connection.remoteAddress.split("f:")[1];
	}
	var interfaces = require('os').networkInterfaces();
	for(var devName in interfaces) {
		var iface = interfaces[devName];
		for(var i = 0; i < iface.length; i++) {
			var alias = iface[i];
			if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
				return alias.address;
			}
		}
	}
}
