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


var nft = {
	"title":"JSON",
	"id":232,
	"users":["hello","world"],
	"content":{"length":"123","post":"Lorem Ipsum"}
}

console.log(nft.title)
console.log(nft.users[1])
console.log(nft.content.post)

console.log(JSON.stringify(nft))
nft = JSON.stringify(nft)
console.log(nft.title)

nft = JSON.parse(nft)
console.log(nft)

nft.title = "Not Available"

console.log(nft)

nft.hash = "hdsewccdsfesfes"

console.log(nft)

nft.users[1] = "land"

nft.users.push("world")

nft.users = ["asd","asdsadd","wwwww"]

console.log(nft)

nft.followers = []
nft.followers.push({
		"username":"mike",
		"id":789
	})
console.log(nft)


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

console.log(post)


console.log("This Post Get " +post.likes.length+ " likes.")








