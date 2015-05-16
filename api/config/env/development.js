module.exports={
    version:"V1",
    API:{
        PORT:5000,
        PATH:"/api"
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
        level:"debug", // silly | debug | verbose | info | warn | error
        logfile:'KNCCI.log'
    }
}