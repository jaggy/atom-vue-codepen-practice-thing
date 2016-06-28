codeClash.prototype.editor = function(editor) {
	var self = this,
	defaults  = {
		theme: 'monokai',
		mode: 'javascript',
	},
	options  = $.extend(defaults, editor.data());

	return {
		init: function() {
			this.renderEditor();
			return this;
		},
		renderEditor: function() {
			this.ace = ace.edit(editor[0]);
			this.setTheme(options.theme);
			this.setMode(options.mode);
		},
		setTheme: function(theme) {
			if(this.getThemes().indexOf(theme) >= 0) { this.ace.setTheme('./theme/' + theme); }
			else { this.ace.setTheme('./theme/' + defaults.theme); }
			return this;
		},
		getThemes: function() {
			return self.config.ace.themes;
		},
		setMode: function(mode) {
			if(this.getModes().indexOf(mode) >= 0) { this.ace.getSession().setMode('./mode/' + mode); }
			else { this.ace.setTheme('./theme/' + defaults.mode); }
			return this;
		},
		getModes: function() {
			return self.config.ace.modes;
		},
		getMode: function() {
			return options.mode;
		},
		setChangeEvents: function() {
			var _ace = this.ace;

			// "run" button maybe?
			// _ace.on('change', function() {
			// 	self._socket.sendFileUpdate(editor.data('mode'), _ace.getValue());
			// });

			_ace.on('blur', function() {
				self._socket.sendFileUpdate(editor.data('mode'), _ace.getValue());
			});
		},
	}.init();
};