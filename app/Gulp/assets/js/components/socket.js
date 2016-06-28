codeClash.prototype.socket = function(handshakeCallback) {
	var self = this, socket;
	return {
		init: function() {
			self._socket = this;
			socket = io(window.location.hostname + ':' + self.config.socket.port, { query: { token: self.session.token }, transports: ['websocket'] } );
			this.bindEvents();
			return this;
		},
		// inbound events
		bindEvents: function() {
			for(var key in this.events) { socket.on(key, this.events[key]); }
		},
		events: {
			handshake: function(data) {
				if(typeof handshakeCallback === 'function') { handshakeCallback(self._socket); }
			},
			noAuth: function(data) {
				window.location = "/login";
			},
			setFiles: function(data) {
				if(typeof self._socket.setFileCallback === 'function') { self._socket.setFileCallback(data.raw, data.compiled); }
			},
			setFile: function(data) {
				self.editors[data.mode].ace.setValue(data.raw);
				self.preview.data[data.mode] = data.raw;
				if(data.mode === 'php') {
					self.preview.compiled[data.mode] = data.compiled[data.mode];
				}
				self.renderPreview();
			}
		},
		getFiles: function(setFileCallback) {
			self._socket.setFileCallback = setFileCallback;
			socket.emit('getFiles');
		},
		sendFileUpdate: function(mode, value) {
			console.log('sendFileUpdate');
			// console.log('mode', mode);
			// console.log('value', value);
			socket.emit('fileUpdate', { mode: mode, value: value });
		},
	}.init();
};