var util = require('util');
var _ = require('underscore');
var Model = require('./model');

var Addon = function() {
    Model.apply(this, arguments);

    _.defaults(this, {
        'name': null,
        'updatedAt': 0,
        'git': null,
        'package': {}
    });
};
util.inherits(Addon, Model);

module.exports = Addon;