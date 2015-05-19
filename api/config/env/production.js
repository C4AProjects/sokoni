'use strict';
module.exports={
    version:"V1",
    API:{
        PORT: process.env.NODE_ENV || 5000,
        PATH:"/api"
    },
    DB:{
        url:'mongodb://localhost/sonoki'
        /*  auth:
         {
         user: 'portal',
         pass: 'weenee@p0rtal'
         }*/
    },

    logger:
    {

        file:"logger/run.js",
        level:"debug", // silly | debug | verbose | info | warn | error
        logfile:'KNCCI.log'
    }
}
