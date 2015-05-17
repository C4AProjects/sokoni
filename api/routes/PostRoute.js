var PostCtrl=require("../controllers/PostController")
module.exports = function (app) {

    app.post(APP.APIPATH+"/member/:memberId/post", function(req, res){

        PostCtrl.post(req.params.memberId,req.body,function(err,doc){
            if (err)
                res.send({success:false,error:err})
            else{

                res.send({success:true,result:doc})
            }

        })

    });

    app.get(APP.APIPATH+"/member/:memberId/post", function(req, res){

        PostCtrl.getMyPosts(req.params.memberId,req.query.skip,req.query.limit,function(err,doc){
            if (err)
                res.send({success:false,error:err})
            else{

                res.send({success:true,result:doc})
            }

        })

    });

}