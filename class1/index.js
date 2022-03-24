var readline = require('readline');

// var a = "helloworld";
// // const a = "1";
// //let a = "3";


// if(a == 1){
// 	let b = 2;
// 	console.log(b);
// 	b= 9
// 	console.log(b);
// }
// //console.log(b);
// console.log(a)


// ////////


// console.log(typeof parseInt(a));
// console.log(parseInt(a));
// //a = parseInt(a)
// console.log("here is a --> " + a)
// if( (typeof a == "string" && a === "helloworld" && a.length == 10) || a == "admin123"){
// 	let v =9;
	// while(v < 100){
		
	// 	//v += 1;
	// 	console.log(v + ")  End..")
	// 	v++;
	// }

// 	for (var i = 0; i <= 10; i++) {
// 		console.log("2 x "+ i + " = " + (i*2));
// 	}

// 	console.log("successfully logged in....")

// }else if(typeof a === "number" && a == "123"){
// 	console.log("Admin Logged In....")

// }
// else{

// 	console.log("Failed")
// }


// var c = [1,2,3,4,5,6];
// var i = 0;


// while(i < c.length){
// 	console.log(c[i]);
// 	i++;
// }
// var sum = 0;
// for (var i = 0; i < c.length; i++) {
// 	sum = sum + c[i]
// 	console.log(sum);
// }


// var students = ["Affan","John","david","yupi"]
// var fathers = ["khan","lucky","albert","nike"]
// var percents = [90, 80, 20, 75]
// var username = "John";

// if(students.length == fathers.length == percents.length){
// 	console.log("process")
// }else{
// 	console.log("Invalid Request")
// }

var ax = 0;
let t = false;
// while(ax < students.length){
// 	if(username == students[ax]){
// 		//console.log("User Found");
// 		t = true
// 	}
// 	ax++
// }

// for (var i = 0; i < students.length; i++) {
// 	if(username == students[i]){
// 		//console.log("User Found");
// 		t = true
// 	}
// }

// if(t){
// 	console.log("User Found")
// }else{
// 	console.log("User not found")
//}
// var students1 = ["Affan","Rizwan","XYZ"];
// var subjects = ["English","Maths","Science","Computer"];
// var marks = [
// 	[50,45,42,41],
// 	[40,40,40,35],
// 	[30,30,30,32]
// ]

// for(var i = 0; i < students1.length; i++){
	
// 	for(var j = 0; j < subjects.length; j++){
// 		console.log(students1[i] + " got "+marks[i][j] + " marks in "+ subjects[j])
// 	}

// }


// var nft = {
// 	"title":"JSON",
// 	"id":232,
// 	"users":["hello","world"],
// 	"content":{"length":"123","post":"Lorem Ipsum"}
// }

// console.log(nft.title)
// console.log(nft.users[1])
// console.log(nft.content.post)

// console.log(JSON.stringify(nft))
// nft = JSON.stringify(nft)
// console.log(nft.title)

// nft = JSON.parse(nft)
// console.log(nft)

// nft.title = "Not Available"

// console.log(nft)

// nft.hash = "hdsewccdsfesfes"

// console.log(nft)

// nft.users[1] = "land"

// nft.users.push("world")

// nft.users = ["asd","asdsadd","wwwww"]

// console.log(nft)

// nft.followers = []
// nft.followers.push({
// 		"username":"mike",
// 		"id":789
// 	})
// console.log(nft)


const post = {};

post.userID = 922;
post.username = "Mark"
post.userprofile = "https://example.com/1.jpg"
post.post = "This world is going to end soon 🤔"
post.imagesPath = ["/public/images/0.png","https://123.com","https://123.com"]
post.type = "public"
post.likes = [{
	"username":"luck",
	"userprofile":"https://example.com/2.jpg",
	"timestamp":"1678203213",
	"likeType":"🤝"
},{
	"username":"luck",
	"userprofile":"https://example.com/2.jpg",
	"timestamp":"1678203213",
	"likeType":"🤝"
},{
	"username":"luck",
	"userprofile":"https://example.com/2.jpg",
	"timestamp":"1678203213",
	"likeType":"🤝"
}
]


post.comments = [{
	"username":"paul",
	"content":"hello world",
	"timestamp":"12323123",
	"likesCount":2,
	"likes":[{
			"username":"luck",
			"userprofile":"https://example.com/2.jpg",
			"timestamp":"1678203213",
			"likeType":"🤝"
	}],
	"replies":[{
		"username":"undefinedHacker",
		"content":"Your Account Is Hacked"
	}]
}]

// console.log(post)


// console.log("This Post Get " +post.likes.length+ " likes.")



const { stdin: input, stdout: output } = require('process');

//var r1 = readline.createInterface({ input, output });
//const r2 = readline.createInterface({ input, output });
var ans1, ans2;

// r1.question('What do you think of Node.js? ', (answer1) => {
	
// 	r1.question('Are you able to use it (Yes/No)? ', (answer2) => {
// 	  // TODO: Log the answer in a database

// 	  if(answer2 == "Yes" || answer2 == "No"){
// 	  	console.log(`Answer 1: ${answer1}`);
// 	  	console.log(`Answer 2: ${answer2}`);
// 	  }else{
// 	  	console.log("Invalid Answer")
// 	  }
// 	  r1.close();
//   });

// });



// for(postData in post){
// 	if(postData == "userID"){
// 		console.log(post[postData])
// 	}
	
// }
// var postArray = Object.entries(post)
// console.log(postArray)

// var htmlData = {

// 	"h1":"This is Body",
// 	"div":[{
// 		"p":"Lorem Ipsum"
// 	}]
// }


// function xyz(){
// 	console.log("Hello World")
// }
// xyz()


// var abcd = ()=>{
// 	console.log("Heloooooo!!!")
// }

// abcd()

// function jsonParser(_post){

// 	for(data in _post){
// 		console.log(data)
// 	}
// }
// jsonParser({post:"1",data:"asd"});


//// 22/03/2022
/*
	- github
	- variables
	- if condition
	- loops
	- array
	- 2d array
	- json
	- functions (basics)
	- html basics
	- javascript in HTML document

	24/03

	- functions
	- promises
	- async/await
	- api calling
*/


function addition(a,b){
	return a+b
}

function multiply(a,b){
	return a*b
}

var a = addition(10, 15)
var result = multiply(a,2)

console.log("Result is: " + result)

var studentData = {

	"name":"Affan",
	"ID":"452323",
	"courses":[],
	"addCourse": function (courseName){
		this.courses.push(courseName)
		return "Added Successfully"
	},
	"getCourse": ()=>{
		var crs = this.courses
		return crs
	},
	"changeID": (c)=>{
		this.ID = c
	}
}

console.log("Total enrolled courses : "+ studentData.courses)

studentData.addCourse("English")
studentData.addCourse("Maths")
studentData.addCourse("Science")

console.log("Total enrolled courses : "+ studentData.courses)
console.log("Student ID is : "+studentData.ID)

studentData.changeID(123)
studentData.ID = 2222
console.log(studentData)


function one(){
	return "Hi it's one"
}

function two(){
	return "Hi It's Two"
	// return  new Promise(function(resolve,reject){
	// 	setTimeout(function(){
	// 		//console.log("Hi it's two")
	// 		resolve("Hi it's two")
	// 	},3000)
	// })
	///return prm;
}

// async function two(){
// 	await setTimeout(function(){
// 		console.log("Hi it's two")
// 		//return "Hi it's two"
// 	},3000)
// }

function three(){
	return "Hi it's three"
}
const setAsyncTimeout = (cb, timeout = 0) => new Promise((resolve,reject) => {
    setTimeout(() => {
        cb();
        reject("Khatam tata bye bye");
    }, timeout);
});

async function checking(){
	 console.log(one())
	 try{
	 	await setAsyncTimeout(() => {
	        console.log(two())
	    	}, 1000);
	 }catch(err){
	 	console.log(err)
	 }
	 
	 console.log(three())
	  
}
checking()

// console.log(one())
// var data = await sleep(two(),3000)
//console.log(data)
//two().then(function(resolve) {
	//console.log(resolve)
//	console.log(three())
//},function(reject){

//})






