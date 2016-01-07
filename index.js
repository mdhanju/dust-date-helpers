'use strict';

var extend = function extend(dust) {

    dust.helpers.formatDate = function(chunk, context, bodies, params) {
        var key = params.format,
            country = params.country,
            value = dust.helpers.tap(params.value, chunk, context),
            operError = function() {
                return 'error';
            }
        console.log('valuevaluevaluevaluevalue11 ::: ', value);
        return chunk.write('XXXXX');
    }
};

if (typeof exports !== 'undefined') {

    var dust = require('dustjs-linkedin');

    module.exports = extend;

} else {
    extend(dust);
}
