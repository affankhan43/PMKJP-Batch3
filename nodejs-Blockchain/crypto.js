var EC = require('elliptic').ec

var ec = new EC('secp256k1');

//var key = ec.genKeyPair();

var key = ec.keyFromPrivate("0bcdc02443814b5021f75ce117f732460e268127eac5b13540b9c660a5adcf76","hex")


//var publicKey = key.getPublic().encode('hex');
var onlyPubkey = ec.keyFromPublic("045736f6a888c32832ad09683e50919a78fecba5b192b5b1ed4e8413ffca3c3401fc60ed5a795bf88497bf11af903341c9f4a42247f03137aa43af469ae4d5343e", 'hex')



var key2 = ec.genKeyPair();


var msg = "Hello World";
var msg2 = [123,354,63,63,21,611,1];
var signature = key.sign(msg);
var derSign = signature.toDER();
//console.log(derSign)


console.log(onlyPubkey.verify(msg, derSign));


var privateKey = key.getPrivate('hex')
//console.log("Public Key -->  "+publicKey) 
console.log()

console.log("privateKey -->" + privateKey)
