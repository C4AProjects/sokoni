/**
 * Created by macbookproretina on 07/05/15.
 */

LoggerService= {

}
var winston=require('winston');
var logger;


LoggerService.init = function (opt) {
    if(opt){
        logger = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)({colorize:true,level:opt.level}),
                new (winston.transports.File)({ filename: opt.logfile ,json: false,level:opt.level})
            ]
        });
    }else{
        logger = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)({colorize:true}),
                new (winston.transports.File)({ filename: 'KNCCI_LOG.log' ,json: false})
            ]
        });
    }

    DEBUG("LoggerService Started")

};
INFO=function(log,opt){
    logger.info(log)
}
WARN=function(log,opt){
    logger.warn(log)
}
ERROR=function(log,opt){
    logger.error(log)
}
LOG=function(log,opt){
    logger.info(log)
}
DEBUG=function(log,opt){
    logger.debug(log)
}
module.exports = LoggerService;