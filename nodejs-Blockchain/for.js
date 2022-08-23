class Animal2 {
	constructor(){
		this.height = 1;
		this.legs = 9;
		this.voice = "unknown"	
	}
}


function Animal(){
	this.height = 1;
	this.legs = 9;
	this.voice = "unknown"
}

Animal.prototype.hello = function() {
	console.log("world")
};
var lion = new Animal();
console.log(lion.hello())