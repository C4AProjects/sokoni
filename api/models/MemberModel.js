
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

member_schema = new Schema({
    name : {type: String,require: true},
    lastName : {type: String,require: true},
    email : {type: String,require: true},
    password : {type: String,require: true},
    profilePhoto:{type: String,require: true},
    created_date: {type: Date, default: Date.now},
    modified_date: {type: Date, default: Date.now}

})
module.exports = function (backend) {
    member_schema.pre('save', function (next) {
        this.modified_date = new Date();
        next();
    });
    backend.MEMBER = mongoose.model('member', member_schema, 'member', true);


}