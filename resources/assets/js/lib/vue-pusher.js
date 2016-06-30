var _ = require('underscore');

function VuePusher (api_key, options) {
    this.pusher   = new Pusher(api_key, options);
    this.channels = {};
}

VuePusher.prototype.subscribe = function (channel, callback) {
    if (this.channels.hasOwnProperty(channel)) {
        console.error('exists');
        return;
    }

    this.channels[channel] = this.pusher.subscribe(channel);

    callback(this.channels[channel]);
};

VuePusher.prototype.unsubscribe = function (channel) {
    this.channels[channel].unsubscribe(channel);
};

module.exports = {
    install: function (Vue, options) {
        var pusher = new VuePusher(options.api_key, options.options);

        Vue.prototype.pusher  = pusher;
        Vue.prototype.$pusher = pusher.pusher;
    }
};
