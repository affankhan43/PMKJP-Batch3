var express = require('express')
var network = require('./main.js')

var app = express();

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

app.get("/getAllBlocks",(req,res)=>{
	res.send(myBlockchain.chain);
})



app.listen(5004,()=>{
	console.log("Server started at port 5004")
}); 
