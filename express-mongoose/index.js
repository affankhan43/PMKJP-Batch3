const express = require('express')

const mongoose = require('mongoose')

const routes = require('./routes')

const app = express();

mongoose.connect("mongodb://localhost:27017/express-mongoose")
.then((client)=>{

	console.log("MONGODB CONNECTED SUCCESSFULLY")



	app.use('/api',routes)
	app.listen(8231,()=>{
		console.log("Server SUCCESSFULLY Started at port number 8231")
	})
}).catch((err)=>{console.log("err13==>"+err)})