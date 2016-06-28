var app     = require('express')(),
http        = require('http').Server(app),
io          = require('socket.io')(http),
exec        = require('child_process').exec,
crypto      = require('crypto'),
querystring = require('querystring');

var activeSessionTokens = [];

var runPHP = function(codeString, callback) {
	var tmpfilename = "tmp_" + crypto.createHash('md5').update(Date.now() + Math.random() + '').digest("hex") + ".php";

	exec('echo \"' + codeString + '\" >> tmp/' + tmpfilename, function() {
		exec('php tmp/' + tmpfilename, function(error, stdout, stderr) {
			if(typeof callback === 'function') {
				if(error) {
					console.log('error!', stderr);
					callback(stderr);
				} else {
					callback(stdout);
					exec('rm tmp/' + tmpfilename);
				}
			}
		});
	});
};

// populate teams from db
var _teams = {
	1: {
		files: {
			php: "<?php echo '<div class=\"testcss\">codeclash</div>'; ?>",
			javascript: "console.log('testjs');",
			css: ".testcss { font-weight: bold; }",
		}
	}
};

io.on('connection', function(socket){
	var handshakeData = socket.request._query;

	if(handshakeData.token) {
		// check user token

		if(activeSessionTokens.indexOf(handshakeData.token) >= 0) {
			// already active
			// do something
		} else {
			console.log('[handshake]', handshakeData.token);

			activeSessionTokens.push(handshakeData.token);

			// send ok signal
			socket.emit('handshake');
		}

		// bind event listeners
		socket.on('getFiles', function() {
			runPHP(_teams[1].files.php, function(output) {
				var compiled = {
					php: output,
					// sass: '', // maybe?
					// coffee: '', // maybe?
				};
				socket.emit('setFiles', { raw: _teams[1].files, compiled: compiled });
			});
		});

		socket.on('fileUpdate', function(data) {
			console.log('fileUpdate data', data);
			_teams[1].files[data.mode] = data.value;

			if(data.mode === 'php') {
				runPHP(_teams[1].files.php.replace(/[\\$]/g, "\\$&"), function(output) {
					//console.log('output', output);
					var compiled = {
						php: output,
						// sass: '', // maybe?
						// coffee: '', // maybe?
					};
					io.emit('setFile', { mode: data.mode, raw: _teams[1].files[data.mode], compiled: compiled });
				});
			} else {
				io.emit('setFile', { mode: data.mode, raw: _teams[1].files[data.mode], compiled: {} });
			}

		});
	} else {
		socket.emit('noAuth');
		socket.disconnect();
	}

	socket.on('disconnect', function() {
		console.log('disconnecting..', handshakeData.token);
		activeSessionTokens.splice(activeSessionTokens.indexOf(handshakeData.token), 1);
	});
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
