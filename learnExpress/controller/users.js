const express = require('express')
const bodyParser = require('body-parser')

var routes = express.Router(); 
var auth = {"apiKey":"asdWe212$$","apiSecret":"ss2@rYYT2"}




function basicAuth(req,res,next){
	console.log(req.headers)
	var basicCode = "Basic "+Buffer.from(auth.apiKey+":"+auth.apiSecret).toString("base64")
	console.log(basicCode)
	if(req.headers.authorization && req.headers.authorization == basicCode){
		next();
	}else{
		res.json({
			"success":false,
			"error":"Permission Denied"
		})
	}
}





routes.use(basicAuth)
routes.get('/test', (req,res)=>{
  console.log("testing....")
  res.json({"Type":"Users"})
});

routes.get('/get/:id', (req,res)=>{
  console.log(req.params)
  if(req.params.id && parseInt(req.params.id) <= 1000 && parseInt(req.params.id) != 0){
  	res.json({
  		"id":req.params.id,
  		"name":"Mick",
  		"lastname":"John",
  		"success":true
  	})
  }
  res.json({"success":false,"error":"invalid Request"})
});

routes.post('/checkUser/:id',(req,res)=>{
	console.log(req.body)
	if(req.body.name && typeof req.body.name == "string"){
		res.json({
			"success":true,
			"id":req.params.id
		})	
	}else{
		res.json({
			"success":false,
			"error":"Missing Name"
		})
	}
	


})
routes.get('/flying/history/:id/:from-:to', (req,res)=>{
  console.log(req.params)
  if(req.params.id && parseInt(req.params.id) <= 1000 && parseInt(req.params.id) != 0){
  	res.json({
  		"id":req.params.id,
  		"from":req.params.from,
  		"to":req.params.to,
  		"flights":[
  			{
  				"date":"23/3/2022",
  				"from":req.params.from,
  				"to":req.params.to,
  				"airline":"PIA"
  			},
  			{
  				"date":"26/3/2022",
  				"from":req.params.from,
  				"to":req.params.to,
  				"airline":"Air Blue"
  			},
  			{
  				"date":"25/3/2022",
  				"from":req.params.from,
  				"to":req.params.to,
  				"airline":"PIA"
  			}

  		],
  		"success":true
  	})
  }
  res.json({"success":false,"error":"invalid Request"})
});

module.exports = routes