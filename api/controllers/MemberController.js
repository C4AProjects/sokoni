/**
 * Created by houcine on 07/05/15.
 */
var  _ = require('underscore');

/* Add member*/
module.exports.addMember=function addMember (doc,callback){

    if (!doc.name)
    {
        callback("Please Fill Member Name");return;
    }
   if (!doc.lastName)
    {
        callback("Please Fill Member Last Name");return;

    }

    if (!doc.email)
    {
        callback("Please Fill Member Email");return;

    }
    if (!doc.password)
    {
        callback("Please Fill Member Password");return;

    }
    var member=new APP.DB.MEMBER();
    member = _.extend(member, doc);
    member.save(function (er) {
        if (er )
           callback("ERROR interne: "+er);
        else
           callback(null, member);
    });
}


/*Get member by id*/
module.exports.getMemberById=function getMemberById(memberId,callback){

    APP.DB.MEMBER.findById(memberId,function(err,member){

        if (err){
            callback("ERROR interne: "+err);


        } else
        if(_.size(member) > 0){
            callback(null,member);
        } else{
            callback("ERROR interne: ");
        }
    });
}

/*Get all member*/
module.exports.getAllMembers=function getAllMembers(callback,skip,limit){
var _skip=0;
    var _limit=50
    if (skip) _skip=skip
    if (limit) _limit=limit

    APP.DB.MEMBER.find({},function(err,result){
        if (err){
            DEBUG('ERROR getAllRides : ' + err);
            callback("ERROR interne");
        } else
            callback(null,result);
    }).skip(_skip).limit(_limit);
}
/*Update member*/
module.exports.updateMember=function updateMember (memberId,memberData,callback){
    APP.DB.MEMBER.findByIdAndUpdate(memberId,memberData, function (err, result){
    if (err){
        DEBUG('ERROR updateRide : ' + err);
        callback("ERROR interne: ")
    }else{
        if(_.size(result) > 0){
            callback(null,result);
        } else{
            var errorMessage = 'Erreur updateRide  :member n\'existe pas';
            DEBUG('ERROR updateRide : ' + errorMessage);
            callback("ERROR interne");

        }
    }
});
}

/* delete member*/
module.exports.deleteMember=function deleteMember (memberId,callback) {

    APP.DB.MEMBER.findByIdAndRemove(memberId, function (err, result){
        if (err){
            DEBUG("ERROR: delete MEMBER: " + err);
            callback("ERROR: delete MEMBER: " + err);

        }else{
           if(result)
                callback(null,result);
            else
                callback("This Member does not exist");
        }
    });
}

