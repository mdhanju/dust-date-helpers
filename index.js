'use strict';
var dust = require('dustjs-linkedin');

var extend = function extend(dust) {

    dust.helpers.formatDate = function(chunk, context, bodies, params) {
        var key = params.format,
            country = params.country,
            value = dust.helpers.tap(params.value, chunk, context),
            operError = function() {
                return 'error';
            }
        return chunk.write('XXXXX');
    }
};

if (typeof exports !== 'undefined') {
    module.export = extend;
} else {
    extend(dust);
}