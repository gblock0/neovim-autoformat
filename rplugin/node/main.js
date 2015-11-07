/* globals plugin, debug */
'use strict';

debug('In plugin');
var fmt = require('util').format,
	numCalls = 0;

function incrementCalls() {
	if ( numCalls === 5 ) {
		debug('too many calls');
	}
	numCalls++;
}

plugin.command('testCmd', {
	range: '',
	nargs: '*'
}, function (nvim, args, range) {
	debug('in testCmd');
	incrementCalls();
	nvim.commandOutput( fmt('Test cmd press: ', numCalls, ' times. ', range) );
});
