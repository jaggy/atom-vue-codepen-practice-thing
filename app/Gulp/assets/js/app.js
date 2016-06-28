'use strict';

// base app object
function codeClash(autoload) {
	var self = this;

	self.editors = {};
	self.session = $('body').data();

	// autoload things
	autoload.map(function(key) {
		if(key in self) {
			switch(key) {
				case self.config.constants.EDITOR:
					if(!self.config.constants.SOCKET in self) {
						console.log('cannot load the editor without the socket');
						break;
					}

					self[self.config.constants.SOCKET](function(ccSocket) {
						$(self.config.editor.selector).each(function() { self.editors[$(this).data('mode')] = self[key]($(this)); });

						$(self.config.editor.selector).css('height', $(window).height()*0.7);
						$(window).resize(function() {
							$(self.config.editor.selector).css('height', $(window).height()*0.7);
						});

						ccSocket.getFiles(function(data, compiled) {
							// update editors
							for(var fileKey in data) {
								if(fileKey in self.editors) {
									self.editors[fileKey].ace.setValue(data[fileKey], -1);
									self.editors[fileKey].setChangeEvents();
								}
							}

							self.preview = {
								data: data,
								compiled: compiled
							};
							self.renderPreview();
							// update preview
							// $('.cc-preview iframe').contents().find('html').html(compiled.php);
							// $('.cc-preview iframe').contents().find('head').append("<style type=\"text/css\">" + data.css + "<\/style>");
							// $('.cc-preview iframe').contents().find('body').append("<script type=\"text/javascript\">" + data.javascript + "<\/script>");
						});
					});

					break;

				case self.config.constants.SOCKET:
					self[key]();
					break;

				default:
					break;
			}
		}
	});

	self.preview = {};
	self.renderPreview = function() {
		$('.cc-preview iframe').contents().find('html').empty();
		$('.cc-preview iframe').contents().find('html').html(self.preview.compiled.php);
		$('.cc-preview iframe').contents().find('head').append("<style type=\"text/css\">" + self.preview.data.css + "<\/style>");
		$('.cc-preview iframe').contents().find('body').append("<script src=\"https://code.jquery.com/jquery-3.0.0.min.js\" integrity=\"sha256-JmvOoLtYsmqlsWxa7mDSLMwa6dZ9rrIdtrrVYRnDRH0=\" crossorigin=\"anonymous\"></script>");
		$('.cc-preview iframe').contents().find('body').append("<script type=\"text/javascript\">" + self.preview.data.javascript + "<\/script>");
	};
};

codeClash.prototype.config = {};