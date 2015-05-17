/**
 * Created by macbookproretina on 17/05/15.
 */
var  _ = require('underscore');
module.exports.post=function Post (memberId,doc,callback){

    if (!memberId)
    {
        callback("Please Fill MemberId");return;
    }


    if (!doc.content)
    {
        callback("Please Fill Post Content");return;

    }

    if (!doc.content)
    {
        callback("Please Fill Post Title");return;

    }


    APP.DB.MEMBER.findOne({_id:memberId},function(err,member){
        if (err)  callback("ERROR interne: "+er);
        else if (!member){
            callback("Member not found");
        }else{
            var post=new APP.DB.POST();


            post = _.extend(post, doc);
            post.author=member._id


            post.save(function (er) {
                if (er )
                    callback("ERROR interne: "+er);
                else
                    callback(null, post);
            });
        }
    })

}

module.exports.getMyPosts=function getInboxMessage (memberId,skip,limit,callback){
    var _skip=0;
    var _limit=50
    if (skip) _skip=skip
    if (limit) _limit=limit


    APP.DB.POST.find({author:memberId},function(err,doc){
        if (err){
            DEBUG('ERROR get Posts : ' + err);
            callback("ERROR interne");
        } else
            callback(null,doc);
    }).skip(_skip).limit(_limit).sort('-modified_date');

}

module.exports.getfolloweePosts=function getfolloweePosts (memberId,skip,limit,callback){
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
module.exports.getStaffPosts=function getStaffPosts (memberId,skip,limit,callback){
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