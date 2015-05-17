module.exports.sendMessage=function sendMessage (from,to,doc,callback){

    if (!from)
    {
        callback("Please Fill from case");return;
    }
    if (!to)
    {
        callback("Please Fill to case");return;

    }

    if (!doc.message)
    {
        callback("Please Fill message");return;

    }

    var msg=new APP.DB.MESSAGE();


    msg.from=from
    msg.to=to
    msg.message=doc.message
    msg.save(function (er) {
        if (er )
            callback("ERROR interne: "+er);
        else
            callback(null, msg);
    });
}

module.exports.getInboxMessage=function getInboxMessage (memberId,skip,limit,callback){
    var _skip=0;
    var _limit=50
    if (skip) _skip=skip
    if (limit) _limit=limit


   APP.DB.MESSAGE.find({to:memberId},function(err,doc){
       if (err){
           DEBUG('ERROR Inbox Message : ' + err);
           callback("ERROR interne");
       } else
           callback(null,doc);
   }).skip(_skip).limit(_limit).sort('-sent_date');

}

module.exports.getOutBoxMessage=function getOutboxMessage (memberId,skip,limit,callback){
    var _skip=0;
    var _limit=50
    if (skip) _skip=skip
    if (limit) _limit=limit


    APP.DB.MESSAGE.find({from:memberId},function(err,doc){
        if (err){
            DEBUG('ERROR Outbox Message : ' + err);
            callback("ERROR interne");
        } else
            callback(null,doc);
    }).skip(_skip).limit(_limit).sort('-sent_date');

}