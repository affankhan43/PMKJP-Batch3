var sha256 = require('sha256')

class Block{
	constructor(timestamp,data,nonce,prevHash){
		this.timestamp = timestamp
		this.data = data
		this.nonce = nonce
		this.prevHash=prevHash
		this.hash = this.createHash(timestamp,data,nonce,prevHash)
	}


	createHash(timestamp,data,nonce,prevHash){
		//var nonce = this.proofOfWork(timestamp,data,prevHash);
		return sha256(timestamp+JSON.stringify(data)+nonce+prevHash)
	}

	static proofOfWork(timestamp,data,prevHash){
		var nonce = 0;
		var difficulty = "001"
		var success = true
		while(success){
			nonce++;
			var hash = sha256(timestamp+JSON.stringify(data)+nonce+prevHash)
			
			//console.log(hash.slice(0,3))
			if(hash.slice(0,3) == difficulty){
				success = false;
				console.log("Hurray! We Got Correct Nonce --> "+ nonce)
			}
		}
		return nonce;
	}
}


// var newblock = new Block('123213',{"value":"asdasd"},123,"asdsd");
//console.log(newblock)

class Blockchain{
	constructor(){
		this.chain = [this.createGenesisBlock()];
	}

	createGenesisBlock(){
		var time = Date.now().toString();
		var nonce = Block.proofOfWork(time,{},"0")
		var newblock = new Block(time,{},nonce,"0");
		console.log('Hi! We create Genesis')
		return newblock;
	}

	addNewBlock(data){
		var time = Date.now().toString();
		var prevhx = this.chain[this.chain.length-1].hash;
		var nonce = Block.proofOfWork(time,data,prevhx)
		var newbloc = new Block(time,data,nonce,prevhx)
		this.chain.push(newbloc)
		console.log("Hi! We got new blocknumber # "+(this.chain.length-1))
	}

}



var xyzNetwork = new Blockchain();
xyzNetwork.addNewBlock({"value":"asdsd"})
//xyzNetwork.addNewBlock({"value":"asdsd"})
//xyzNetwork.addNewBlock({"value":"asdsd"})





console.log(xyzNetwork)







