/**
 * Created by macbookproretina on 16/05/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

message_schema = new Schema({
    from : {type: Schema.Types.ObjectId, ref: 'member'},
    to : {type: Schema.Types.ObjectId, ref: 'member'},
    sent_date : {type: Date, default: Date.now},
    message : {type: String}
})
module.exports = function (backend) {
    backend.MESSAGE = mongoose.model('message', message_schema, 'message', true);
}