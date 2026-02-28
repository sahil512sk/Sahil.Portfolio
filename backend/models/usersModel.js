const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
}, {timestamps : true});
module.exports = mongoose.model('User', usersSchema);
