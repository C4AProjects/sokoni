
var MemberCtrl=require("../controllers/MemberController")
var FollowCtrl=require("../controllers/FollowController")
module.exports = function (app) {

    app.post(APP.APIPATH+"/member", function(req, res){

        MemberCtrl.addMember(req.body,function(err,doc){
            if (err)
                res.send({success:false,error:err})
            else{

                res.send({success:true,result:doc})
            }

        })

    });
    /*Get member*/
    app.get(APP.APIPATH + '/member/:memberId', function (req, res) {

        MemberCtrl.getMemberById(req.params.memberId,function(err,doc){
            if (err)
                res.send({success:false,error:err})
            else
                res.send({success:true,result:doc})
        });

    });
    /*Get All members*/
    app.get(APP.APIPATH + '/member/', function (req, res) {

        MemberCtrl.getAllMembers(function(err,doc){
            if (err)
                res.send({success:false,error:err})
            else
                res.send({success:true,result:doc})
        },req.query.skip,req.query.limit);

    });
/*Update member*/
    app.put(APP.APIPATH + '/member/:memberId', function (req, res) {
        MemberCtrl.updateMember(req.params.memberId,req.body,function(err,doc){
            if (err)
                res.send({success:false,error:err})
            else{
                res.send({success:true})
            }
        });

    });
    /*delete member*/
    app.delete(APP.APIPATH + '/member/:memberId', function (req, res) {
        MemberCtrl.deleteMember(req.params.memberId,function(err,doc){
            if (err)
                res.send({success:false,error:err})
            else{
                    res.send({success:true})
            }
        });

    });

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