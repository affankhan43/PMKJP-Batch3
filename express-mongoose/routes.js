const express = require('express')

const users = require('./models/users.js')

const routers = express.Router()

routers.get('/hello',(req,rec)=>{
	rec.json({success:true,data:"Hello World"});
})



routers.get('/create',(req,rec)=>{

	var array = [
	{
		"user_id":2,
		"username":"haider",
		"password":"123",
		"nationality":"Africa"
	},{
		"user_id":3,
		"username":"john",
		"password":"sdfg",
		"nationality":"kenya"
	},{
		"user_id":4,
		"username":"kooo",
		"password":"farig",
		"nationality":"bangladesh",
		"phone":9233334543534324
	}];
	//var newUser = new model([{"userid":"asd","username":234},{"userid":"asd","username":234}]);
	users.create(array).then((data1,err)=>{
		console.log(data1)
		console.log(err)
	})



	rec.json({success:true,data:"Hello World"});
})

module.exports = routers