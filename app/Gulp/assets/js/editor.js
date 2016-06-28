'use strict';

require(["vendors/ace/ace", "https://cdn.socket.io/socket.io-1.4.5.js"], function(ace, io) {
	/**
	*
	* DO NOT REMOVE COMMENTED LINES
	* Those are directives for gulp-include
	* https://www.npmjs.com/package/gulp-include
	*
	**/

	// load configs
	//=include ./data/configs/constants.js
	//=include ./data/configs/editor.js
	//=include ./data/configs/socket.js
	//=include ./data/configs/ace.js

	// load components
	//=include ./components/editor.js
	//=include ./components/socket.js

	// start
	$(document).ready(function() { new codeClash(['editor']); });
});
