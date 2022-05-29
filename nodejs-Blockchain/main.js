var sha256 = require('sha256')
var { v4:uuidv4 } = require('uuid')

class Block{
	constructor(timestamp,transactions,nonce,prevHash,height){
		this.timestamp = timestamp
		this.transactions = transactions
		this.nonce = nonce
		this.prevHash=prevHash
		this.height = height
		this.hash = this.createHash(timestamp,transactions,nonce,prevHash,height)
	}


	createHash(timestamp,transactions,nonce,prevHash,height){
		//var nonce = this.proofOfWork(timestamp,transactions,prevHash);
		return sha256(timestamp+JSON.stringify(transactions)+nonce+prevHash+height)
	}

	static proofOfWork(timestamp,transactions,prevHash,height){
		var nonce = 0;
		var difficulty = "111"
		var success = true
		while(success){
			nonce++;
			var hash = sha256(timestamp+JSON.stringify(transactions)+nonce+prevHash+height)
			
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
	mempool = []
	chain = []
	constructor(){
		this.chain = [this.createGenesisBlock()];
		//this.mempool = [];
	}

	createGenesisBlock(){
		var time = Date.now().toString();
		var nonce = Block.proofOfWork(time,[],"0",1)
		var newblock = new Block(time,[],nonce,"0",1);
		console.log('Hi! We create Genesis')
		//this.mempool = []
		//reward transaction
		this.createTx("0x00000","Affan",10);
		//console.log(this.mempool)
		return newblock;
	}

	mineNewBlock(){
		var time = Date.now().toString();
		var prevhx = this.chain[this.chain.length-1].hash;
		var nonce = Block.proofOfWork(time,this.mempool,prevhx,this.chain.length+1)
		var newbloc = new Block(time,this.mempool,nonce,prevhx,this.chain.length+1)
		this.chain.push(newbloc)
		console.log("Hi! We got new blocknumber # "+(this.chain.length-1))
		this.mempool = []
		//reward transaction
		this.createTx("0x00000","Affan",10);
	}


	createTx(fromAddress, toAddress, value){
		var fromBalance = this.getBalance(fromAddress)
		if(fromBalance > value || fromAddress == "0x00000"){
			var tx = {
				"txid":uuidv4().split('-').join(""),
				"from":fromAddress,
				"to":toAddress,
				"amount":value
			}
			this.mempool.push(tx)
		}else{
			console.log("insuffcient Balance")
		}
		
	}

	isChainValid(){
		var valid = true
		if(this.chain[0].prevHash != "0" || this.chain[0].height != 1){
			return false;
		}
		for (var i = 1; i < this.chain.length; i++) {
			if(this.chain[i].height != i+1){
				return false
			}
			if(this.chain[i-1].hash != this.chain[i].prevHash){
				return false
			}
			if(this.chain[i].hash != sha256(this.chain[i].timestamp+JSON.stringify(this.chain[i].transactions)+this.chain[i].nonce+this.chain[i].prevHash+this.chain[i].height)){
				return false;
			}
		}

		return valid;
	}

	getTransactions(){
		var txs = [];
		//9
		for (var i = 0; i < this.chain.length; i++) {
			if(typeof(this.chain[i].transactions) != "undefined" && this.chain[i].transactions.length > 0 ){
				console.log("We have some txs in block height --> "+ this.chain[i].height)
				for (var j = 0; j < this.chain[i].transactions.length; j++) {
					var tempTx = this.chain[i].transactions[j]
					tempTx.blockHeight = this.chain[i].height;
					tempTx.confirmations = this.chain.length - i;
					txs.push(tempTx)
				}
			}
		}
		return txs;
	}

	getBalance(address){
		var txs = this.getTransactions();
		var balance = 0;
		for (var i = 0; i < txs.length; i++) {
			if(txs[i].from == address){
				balance -= txs[i].amount;
			}
			else if(txs[i].to == address){
				balance = balance + txs[i].amount
			}
		}
		return balance;
	}

}

//console.log(uuidv4().split('-').join(""))
var xyzNetwork = new Blockchain();
xyzNetwork.mineNewBlock()

xyzNetwork.createTx("address1","address2",123)
xyzNetwork.createTx("address2","address3",543)
//xyzNetwork.addNewBlock({"value":"asdsd"})
//xyzNetwork.addNewBlock({"value":"asdsd"})



xyzNetwork.mineNewBlock()
xyzNetwork.createTx("Affan","address3",1)
xyzNetwork.mineNewBlock()
xyzNetwork.mineNewBlock()
xyzNetwork.mineNewBlock()
// xyzNetwork.chain[2].transactions[0].from = "affan"
//console.log(xyzNetwork)
console.log(xyzNetwork.getTransactions())
console.log(xyzNetwork.getBalance("Affan"))
console.log(xyzNetwork.chain[xyzNetwork.chain.length-1].height)
//console.log("Is chain Valid--->>  "+xyzNetwork.isChainValid())







