/**
 * Created by macbookproretina on 07/05/15.
 */
'use strict';
process.env.NODE_ENV = 'development';


var dev = require('./env/development'),
    prod = require('./env/production');
module.exports = {
    loadConfig: function () {
        var conf;
        if ('development' == process.env.NODE_ENV) {
            conf = dev;
            console.log("ENV:dev")
        } else {

            conf = prod;
            console.log("ENV:production")

        }
        return conf;
    }
};