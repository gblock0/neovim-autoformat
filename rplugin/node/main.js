/* globals plugin */
'use strict';

plugin.command('TestCmd', {
	range: '',   // Line 16
	nargs: '*'
}, function (nvim) {
	nvim.commandOutput( 'w' );
});
