/**
 * Created by macbookproretina on 14/05/15.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

follow_schema = new Schema({
    follower : {type: Schema.Types.ObjectId, ref: 'member'},
    followee : {type: Schema.Types.ObjectId, ref: 'member'},
    start : {type: Date, default: Date.now},
    end : {type: Date}
})
module.exports = function (backend) {
    backend.FOLLOWER = mongoose.model('follow', follow_schema, 'follow', true);
}