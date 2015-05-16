/**
 * Created by macbookproretina on 14/05/15.
 */

var  _ = require('underscore');

/* Add member*/
module.exports.follow=function follow (followerId,followeeId,callback){
    //verify that this following deos not exist
    APP.DB.FOLLOWER.findOne({follower:followerId,followee:followeeId},function(err,doc){
        if(err){
            ERROR(err)
            callback(err)
        }else if (doc){
            callback("this follower already fellowing the followee")
            return;
        }else{
            //verify FollowerId
            APP.DB.MEMBER.findOne({_id:followerId},function(errFindFollower,findFollowerResult){
                if(errFindFollower) {
                    ERROR(errFindFollower)
                    callback("ERROR Finding Follower "+errFindFollower)
                    return;
                }else if(!findFollowerResult){
                    callback("This followerId does not exist.")
                    return;
                }else{
                    //verify FolloweeId
                    APP.DB.MEMBER.findOne({_id:followeeId},function(errFindFollowee,findFolloweeResult){
                        if(errFindFollowee) {
                            ERROR(errFindFollowee)
                            callback("ERROR Finding Followee "+errFindFollowee)
                            return;
                        }else if(!findFolloweeResult){
                            callback("This followeeId does not exist.")
                            return;
                        }else{
                            DEBUG("create Following Action")
                            var follow =new APP.DB.FOLLOWER()
                            follow.follower=findFollowerResult._id;
                            follow.followee=findFolloweeResult._id;

                            follow.save(function(err){
                                if (err){
                                    ERROR(err)
                                    callback("ERROR saving Follow "+err)
                                    return;
                                }else{
                                    callback(null,follow)
                                }
                            })

                        }



                    })

                }



            })

        }

    })


}

module.exports.getfollower=function getfollower (memberId,skip,limit,callback) {

    var _skip=0;
    var _limit=50
    if (skip) _skip=skip
    if (limit) _limit=limit

    APP.DB.FOLLOWER.find({followee: memberId},'-followee', function (err, doc) {
        if (err) {
            ERROR(err)
            callback(err)
        } else {
            callback(null,doc)
            return;
        }
    }).skip(_skip).limit(_limit).populate('follower','-password');

}

module.exports.getfollowee=function getfollowee (memberId,skip,limit,callback) {

    var _skip=0;
    var _limit=50
    if (skip) _skip=skip
    if (limit) _limit=limit

    APP.DB.FOLLOWER.find({follower: memberId},'-follower', function (err, doc) {
        if (err) {
            ERROR(err)
            callback(err)
        } else {
            callback(null,doc)
            return;
        }
    }).populate('followee','-password').skip(_skip).limit(_limit);

}

module.exports.deleteFollower=function deleteFollower (followerId,followeeId,callback) {

    APP.DB.FOLLOWER.findOne({follower:followerId,followee:followeeId},function(err,doc) {
        if (err) {
            ERROR(err)
            callback(err)
        } else if (!doc) {
            callback("this followeing link doesnot exist, please verify sent members ID")
            return;
        }else{
            doc.remove();
            callback(null,doc)

        }
    })

}