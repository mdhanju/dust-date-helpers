'use strict';

var extend = function extend(dust, moment) {

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
};

if (typeof exports !== 'undefined') {

    var dust = require('dustjs-linkedin');
    var moment = require('moment');
    module.exports = extend(dust, moment);

} else {
    extend(dust);
}
