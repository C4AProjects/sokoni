APP={};
APP.CONFIG=require("./config/config").loadConfig();

APP.LOGGER = require("./logger/logger");
APP.LOGGER.init(APP.CONFIG.logger);

INFO("Starting Server")
INFO("KNCCI "+ APP.CONFIG.version)
DEBUG("Loading DB")
APP.DB={}
require("./models/MemberModel")(APP.DB);
require("./models/FollowModel")(APP.DB);
require("./models/MessageModel")(APP.DB);
require('./utils/connectionUtils')(APP.DB);



APP.DB.connect(APP.CONFIG.DB);
INFO("Starting API")
require("./api");