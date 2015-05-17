/**
 * Created by macbookproretina on 16/05/15.
 */
var MemberCtrl=require("../controllers/MemberController")
var FollowCtrl=require("../controllers/FollowController")
module.exports = function (app) {

    app.post(APP.APIPATH + '/member/:followerId/follow/:followeeId', function (req, res) {

        FollowCtrl.follow(req.params.followerId,req.params.followeeId,function(err,doc){
            if (err){
                res.send({success:false,error:err})
            }

            else{
                res.send({success:true,result:doc})
            }
        })


    });
    app.delete(APP.APIPATH + '/member/:followerId/follow/:followeeId', function (req, res) {

        FollowCtrl.deleteFollower(req.params.followerId,req.params.followeeId,function(err,doc){
            if (err){
                res.send({success:false,error:err})
            }

            else{
                res.send({success:true})
            }
        })


    });

    app.get(APP.APIPATH + '/member/:memberID/followee', function (req, res) {

        FollowCtrl.getfollowee(req.params.memberID,req.query.skip,req.query.limit,function(err,doc){
            if (err){
                res.send({success:false,error:err})
            }

            else{
                res.send({success:true,result:doc})
            }
        })


    });
    app.get(APP.APIPATH + '/member/:memberID/follower', function (req, res) {

        FollowCtrl.getfollower(req.params.memberID,req.query.skip,req.query.limit,function(err,doc){
            if (err){
                res.send({success:false,error:err})
            }

            else{
                res.send({success:true,result:doc})
            }
        })


    });


}