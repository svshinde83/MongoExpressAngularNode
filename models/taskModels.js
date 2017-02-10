var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var myModelSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var myModel = mongoose.model('myModel', myModelSchema);

module.exports = myModel;