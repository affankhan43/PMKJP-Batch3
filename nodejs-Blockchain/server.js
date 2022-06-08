var express = require('express')
var network = require('./main.js')
const bodyParser = require('body-parser')
var port = process.argv[2]
var networks = [];

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text())

var myBlockchain;

app.get("/init",(req,res)=>{
	console.log("Blockchain Started!!")
	myBlockchain = new network.Blockchain();
	console.log(myBlockchain)
	res.send(myBlockchain)
});



app.get("/mine",(req,res)=>{
	myBlockchain.mineNewBlock();
	res.send("Mined Successfully");
})

app.post("/registerNewNode",(req,res)=>{
	if(typeof(req.body) == "string"){
		try{
			req.body = JSON.parse(req.body);
		}catch(){
			res.send("Invalid Body")
		}
		//verify node url is valid or not
		networks.push(req.body.node);
	}
})

app.get("/getAllBlocks",(req,res)=>{
	res.send(myBlockchain.chain);
})



app.listen(port,()=>{
	console.log(`Server started at port ${port}`)
}); 
