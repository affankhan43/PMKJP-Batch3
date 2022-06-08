var sha256 = require('sha256')
var { v4:uuidv4 } = require('uuid')
var EC = require('elliptic').ec
var ec = new EC('secp256k1');

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

class Transaction{
	sign = null
	constructor(fromAddress, toAddress, amount){
		this.txid = uuidv4().split('-').join("")
		this.from = fromAddress
		this.to = toAddress;
		this.amount = amount
		this.sign = null;
	}
}


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
		var rewardTx = new Transaction("0x00000","Affan",10)
		this.createTxAndSign(null,rewardTx);
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
		var rewardTx = new Transaction("0x00000","Affan",10)
		this.createTxAndSign(null,rewardTx);
	}


	createTxAndSign(key,txObj){
		if(txObj.from != "0x00000"){
			var keyFromPriv = ec.keyFromPrivate(key,'hex');
			var publicKey = keyFromPriv.getPublic().encode('hex');

			if(this.getBalance(publicKey) < txObj.amount ){
				return "Insufficient Balance"
			}
			if(publicKey == txObj.from){
				var signTx = keyFromPriv.sign(JSON.stringify(txObj));
				var signatureHash = signTx.toDER();
				txObj.sign = signatureHash;
				this.mempool.push(txObj)
			}else{
				return "Invalid Signature"
			}
			
		}else{
			this.mempool.push(txObj)
		}
	}

	validateTx(txObj){
		var fromKey = txObj.from;
		var signhash = txObj.sign;
		var msg = txObj
		msg.sign = null
		var pubKey = ec.keyFromPublic(fromKey,'hex')
		return pubKey.verify(JSON.stringify(msg),signhash)
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


module.exports = {Blockchain,Transaction}
//console.log(process.argv)

/// Initiate Blockchain
var xyzNetwork = new Blockchain();


/// Mine new block
xyzNetwork.mineNewBlock()


/// Tx object creation
var newTx = new Transaction(
	"045736f6a888c32832ad09683e50919a78fecba5b192b5b1ed4e8413ffca3c3401fc60ed5a795bf88497bf11af903341c9f4a42247f03137aa43af469ae4d5343e",
	"address2",
	10
);

/// signing tx and adding to mempool
console.log(xyzNetwork.createTxAndSign("0bcdc02443814b5021f75ce117f732460e268127eac5b13540b9c660a5adcf76",newTx))


/// Mine new block
xyzNetwork.mineNewBlock()


//print all confirmed txs
console.log(xyzNetwork.getTransactions())



//testing tx is valid or not
//console.log(xyzNetwork.validateTx(xyzNetwork.chain[2].transactions[1]))






