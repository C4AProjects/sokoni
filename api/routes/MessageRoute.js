/**
 * Created by macbookproretina on 16/05/15.
 */


var MessageCtrl=require("../controllers/MessageController")
module.exports = function (app) {

    app.post(APP.APIPATH+"/member/:fromId/message/:toId", function(req, res){

        MessageCtrl.sendMessage(req.params.fromId,req.params.toId,req.body,function(err,doc){
            if (err)
                res.send({success:false,error:err})
            else{

                res.send({success:true})
            }

        })

    });


    app.get(APP.APIPATH+"/member/:memberId/inbox/", function(req, res){

        MessageCtrl.getInboxMessage(req.params.memberId,req.query.skip,req.query.limit,function(err,doc){
            if (err)
                res.send({success:false,error:err})
            else{

                res.send({success:true,result:doc})
            }

        })

    });
    app.get(APP.APIPATH+"/member/:memberId/outbox/", function(req, res){

        MessageCtrl.getOutBoxMessage(req.params.memberId,req.query.skip,req.query.limit,function(err,doc){
            if (err)
                res.send({success:false,error:err})
            else{

                res.send({success:true,result:doc})
            }

        })

    });


}