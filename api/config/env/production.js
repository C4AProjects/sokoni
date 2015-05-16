/**
 * Created by macbookproretina on 07/05/15.
 */
module.exports={
    server:{
            PORT:4000
        },
    DB:{
        url:'mongodb://localhost/taxi'
        /*  auth:
         {
         user: 'portal',
         pass: 'weenee@p0rtal'
         }*/
    },

    logger:
    {

        file:"logger/run.js",
        level:"error", // silly | debug | verbose | info | warn | error
        logfile:'server.log'
    }
}