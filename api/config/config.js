/**
 * Created by macbookproretina on 07/05/15.
 */
'use strict';
//process.env.NODE_ENV = 'development';


var dev = require('./env/development'),
    prod = require('./env/production');
module.exports = {
    loadConfig: function () {
        var conf;
        if ('production' == process.env.NODE_ENV) {
            conf = prod;
            console.log("ENV:production");
           
        } else {

            conf = dev;
            console.log("ENV:dev");

        }
        return conf;
    }
};
