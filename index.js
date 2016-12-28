'use strict';

var extend = function extend(dust, moment, numeral) {

    dust.helpers.formatDate = function(chunk, context, bodies, params) {
        var key = params.format,
            value = dust.helpers.tap(params.value, chunk, context),
            operError = function() {
                return 'error';
            }
        var formattedDate = moment(new Date(value)).format(key);
        if (formattedDate === 'Invalid date') formattedDate = '';
        return chunk.write(formattedDate);
    }
    dust.helpers.formatCurrency = function(chunk, context, bodies, params) {
        var key = params.format || '$0,0',
            value = dust.helpers.tap(params.value, chunk, context),
            operError = function() {
                return 'error';
            }
        var formattedCurrency = numeral(value).format(key);
        return chunk.write(formattedCurrency);
    }
};

if (typeof exports !== 'undefined') {

    var dust = require('dustjs-linkedin');
    var moment = require('moment');
    var numeral = require('numeral');
    module.exports = extend(dust, moment, numeral);

} else {
    extend(dust);
}
