//var exports = module.exports
export default class animal{
	constructor(name, color="asd", leg=4){
		this.name = name;
		this.color = color;
		this.legs = leg;
	}
	getName(){
		return this.name;
	}

	getColor(){
		return this.color;
	}
	getLegs(){
		return this.legs;
	}
}




export function addDivide(a,b,c){
	return (a+b)/c;
} 


export function add(a,b){
	return a+b;
} 

export function subs(a,b) {
	return a-b;
}


// exports.addition = add;
// exports.sub = subs;
//exports.adddiv = addDivide;