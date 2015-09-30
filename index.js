var debug = global.debug = global.debug || require('debug');

var Debug = function(name) {
	Debug._debugger[name] = Debug._debugger[name] || function() {
		//create fonction for evaluation
		Debug._internal[name] = Debug._internal[name] || debug(name);
		return Debug._internal[name].apply(Debug._internal[name], arguments);

	};
	return Debug._debugger[name];
};
Debug._debugger = {};
Debug._internal = {};

Debug.refreshAll = function() {
	debug('refresh all', Object.keys(Debug._internal));
	Debug._internal = {};
};


Debug.enable = function(level) {
	debug.names = [];
	debug.skip = [];
	debug.enable(level);
};

module.exports = Debug;
