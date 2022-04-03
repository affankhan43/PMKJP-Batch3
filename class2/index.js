//var { addition,sub,adddiv } = require('./mathFuncs.js') 
import animal from './mathFuncs.js'

function add(){
	return "sdasd";
}



var firstObj = new animal("Dogs",null,6);
// console.log(firstObj)
// console.log(firstObj.getColor())
// console.log(firstObj.getLegs())


var sec = new animal("Cat","Brown",3);
// console.log(sec.getName())
// console.log(sec.getColor())
// console.log(sec.getLegs())



var trees = new animal("Tiger","Black");
// console.log(trees.getName())
// console.log(trees.getColor())
//console.log(trees.getLegs())

// console.log(addFunc.adddiv(10,10,5))
//console.log(addFunc.sub(10,10))
// console.log(sdasdas(10,10,1))
// console.log(dao(12,22))
// console.log(add())
//console.log(subss(10,10))



/*

	- slice
	- substring
	- substr
	- indexOf
	- lastindexOf
	- startsWith
	- EndsWith

	- Math
	- Inheritance

	1/April/2022

	- STATIC
	- Prototypes
	- Express Documentation
*/

var contentArray = ["hello weo","Pakistan","India"]
//console.log(contentArray.splice(1,1))
var content = "HelloWorld 123";
//console.log(content.slice(-5,-1))


var content2 = "Helloworld Lorem Ipsum.,..."
//console.log(contentArray[0].substring(0,5))

var content3 = "LoremIpsum Random Para"

// console.log(content3.substr(6,6))

// console.log(content3.indexOf("Para"))

// console.log(content3.lastIndexOf("Para",20))

//console.log(content3.startsWith("L"))

//console.log(content3.endsWith("Para"))

var fileName = "affan.khan,627@gmail.com"

//console.log(fileName.split("@")[0].split(",")[0])

class grandParent{

	constructor(gpName,gpDOB){
		this.gName = gpName
		this.gDOB = gpDOB
	}

	combine(){
		return this.base+' '+this.body
	}

	gpbio(){
		return "Name is: "+this.gName+" and Date of birth "+this.gDOB
	}
}

class child extends grandParent{

	constructor(grandParentName,grandParentDOB,name,age){
		super(grandParentName,grandParentDOB);
		this.name = name;
		this.age = age
	}

	SecondBio(){
		return "Parent Details:  "
		+this.gpbio()+
		"Personal Details:  His name is "
		+this.name+
		" "+this.gName+
		" and his age is "+this.age
	}
}


class grandChild extends child{
	constructor(grandParentName,grandParentDOB,name,age,gcName,gcDOB){
		super(grandParentName,grandParentDOB,name,age);
		this.gcName = gcName
		this.gcDOB = gcDOB
	}

	thirdBio(){
		return this.SecondBio() +
		"My name is "+this.gcName+" and DOB is" +
		this.gcDOB
	}



}

//var newBase = new base();
var newChild = new grandChild("John","1900-01-01","Mike","1930-03-09","XYZ","2011-09-30");

//console.log("His Parent Details are "+ newChild.gpbio())
//console.log("His details are "+newChild.thirdBio());




class Cars{
	static wheels = 4;
	static seats = "available"
	constructor(name,model){
		this.name = name
		this.model = model
	}

	carModel(){
		return this.model
	}

	static horn(){
		return "!!!!!!!!"
	}
}

var car1 = new Cars("mehran","1999");
console.log(car1.carModel())
console.log(Cars.horn())
console.log(Cars.wheels)
console.log(Math.PI)


function Line(x,y){
	this.x = x;
	this.y = y;
	this.length = function(){
		return this.x - this.y
	}
}

Line.prototype.z = 123
Line.prototype.printer = function(){
	console.log("Hello World")
}
var l1 = new Line(1,2)

console.log(l1.__proto__.z)
l1.__proto__.printer()





