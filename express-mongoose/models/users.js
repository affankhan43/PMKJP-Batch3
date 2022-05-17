const mongoose = require('mongoose');

const schema = mongoose.Schema;

const users = new schema({
	"user_id":{type:Number,required:true},
	"username":{type:String,required:true,match:/[a-z]/},
	"password":{type:String,required:true},
	"nationality":{type:String,required:true},
	"phone":Number
}) 

const user = mongoose.model('users',users);


module.exports = user
