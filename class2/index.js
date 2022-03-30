//var { addition,sub,adddiv } = require('./mathFuncs.js') 
import animal from './mathFuncs.js'

function add(){
	return "sdasd";
}



var firstObj = new animal("Dogs",null,6);
console.log(firstObj)
console.log(firstObj.getColor())
console.log(firstObj.getLegs())


var sec = new animal("Cat","Brown",3);
console.log(sec.getName())
console.log(sec.getColor())
console.log(sec.getLegs())



var trees = new animal("Tiger","Black");
console.log(trees.getName())
console.log(trees.getColor())
console.log(trees.getLegs())

// console.log(addFunc.adddiv(10,10,5))
//console.log(addFunc.sub(10,10))
// console.log(sdasdas(10,10,1))
// console.log(dao(12,22))
// console.log(add())
//console.log(subss(10,10))