/**
 * Created by macbookproretina on 07/05/15.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


/**
 * @constructor connection
 * @memberof! APP.BACKEND.UTILS
 */
var connectionUtils=  function connectionUtils (backend) {
    var isConnected = false;

    /**
     * Get a page from the server
     * @function connect
     * @memberof connection
     * @param {PageRequest} pageRequest Info on the page you want to request
     * @param {function} callback Function executed when page is retrieved<br />

     */
    hello = function hello() {
        console.log("Hello")
    }

    backend.connect = function connect   (opt) {
        DEBUG('[DB]: Connecting...');
        if (opt)

            mongoose.connect(opt.url,opt.auth);

        else
        {

            ERROR("Please configure DB Connexion Settings")


        }

    }
    backend.disconnect = function (cb) {
        DEBUG('[DB]: discnnecting...');
        mongoose.disconnect(function () {
            DEBUG('[DB]: discnnected');
            isConnected = true;
        });


    }
    backend.getConnectionStatus = function getConnectionStatus() {
        return isConnected;
    }
    backend.connection = mongoose.connection;
    backend.connection.on('open', function () {
        INFO('[DB]: Connected OK');
        isConnected = true;

    });

    /** Open and close your Jacket. */
    backend.connection.on('error', function (err) {
        isConnected = false;
        console.log('MongoDB error: %s', err);
    });

}
module.exports=connectionUtils;