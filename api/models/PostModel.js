/**
 * Created by macbookproretina on 17/05/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

post_schema = new Schema({
    title : {type: String,require: true},
    content : {type: String,require: true},
    photo : {type: String,require: true},
    author :  {type: Schema.Types.ObjectId, ref: 'member'},
    type :  {type: String, required: true, uppercase: true, enum: ['NEWS', 'ARTICLE'], default: 'ARTICLE'},
    created_date: {type: Date, default: Date.now},
    modified_date: {type: Date, default: Date.now}

})
module.exports = function (backend) {
    post_schema.pre('save', function (next) {
        this.modified_date = new Date();
        next();
    });
    backend.POST = mongoose.model('post', post_schema, 'post', true);


}