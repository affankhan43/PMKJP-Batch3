var mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/learnMongodb')
.then((client)=>{
	//if(err){return console.log("err-->"+err)}
	var data = mongoose.Schema;
	var sch = new data({
		userid:{type:String,required:true},
		username:String,
		id: Number
		//_id: mongoose.ObjectId
	})

	var model = mongoose.model('users',sch)
	var obj = mongoose.ObjectId;
	var array = [{"userid":"asd","username":234},{"userid":"asd","username":234}];
	var newUser = new model([{"userid":"asd","username":234},{"userid":"asd","username":234}]);
	model.create(array).then((err,data1)=>{
		console.log(data1)
		console.log(err)
	})
	model.remove({}).then((data1,err)=>{
		console.log(data1)
		//console.log(err)
	})

	console.log('connected successfully');
}).catch((err)=>{console.log("err13==>"+err)});

