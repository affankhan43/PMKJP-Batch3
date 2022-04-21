const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')
const app = express()
const morgan = require('morgan')
const axios = require('axios')
var device = require('express-device');
var users = require('./controller/users.js');
//app.use(device.capture());
const port = 1992
const pss = "asdsad"

// app.get('/home/about', (req, res) => {
//   res.send('Hello World!')
//   // console.log(req)
//   // console.log(res)
// })

// using bodyparser library in express for parsing body

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text())
app.use('/users/',users);

var logger = fs.createWriteStream('access.log', {
    flags: 'a' // 'a' means appending (old data will be preserved)
})
app.use(morgan('combined',{stream: logger}))



// function middleware1(req,res,next){
//   var logger = fs.createWriteStream('log.txt', {
//     flags: 'a' // 'a' means appending (old data will be preserved)
//   })
//   var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
//   logger.write(`\n`+new Date().toUTCString()+ '  IP:'+ ip + ' Device:'+ req.device.type+'  URL:'+ req.url)
//   console.log('I am middleware number 1')
//   next()
// }
function middleware2(req,res,next){
  console.log('I am middleware number 2')
  next()
}
function middleware3(req,res,next){
  console.log('I am middleware number 3')
  next()
}
app.use(middleware3)
//app.use(middleware1)
app.use(middleware2)

app.get('/home', (req, res) => {
  var jso = {"name":"affan","title":"dev","lastname":"khan"}
  console.log(Object.keys(jso))
  console.log(Object.values(jso))
  res.send('Welcome Home! End')
  // console.log(req)
  // console.log(res)
})

app.post('/new', (req, res) => {
  console.log(typeof req.body)
  if(typeof req.body == "string"){
    try{
      req.body = JSON.parse(req.body)  
    }catch{
      res.send("Invalid Request")
    }
    
  }
  if(req.body.username == "affan"){
    res.send('Welcome Home Affan')  
  }else{
    res.send('Permission Denied')
  }
  
  // console.log(req)
  // console.log(res)
})

app.get('/testing', (req,res)=>{
  console.log(__dirname)
  res.sendFile(path.join(__dirname,'/views/index.html'))
});


app.get('/content',(req,res)=>{
  res.json({"title":"json","name":"Express"});
})

//https://public-api.solscan.io/block/last?limit=10
app.get("/solanaBlock",(req,res)=>{
  axios.get(
    "https://public-api.solscan.io/block/last?limit=10",
    // {
    //   headers:{'accept':'application/json'}
    // }
  ).then(function(response){
    console.log(response.data)
    res.send(JSON.stringify(response.data))
  })
  .catch(function (error) {
    // handle error
    //console.log(error);
    res.send(JSON.stringify(error))
  })
});




app.get('/sendRequest',(req,res)=>{
  var basicCode = "Basic "+Buffer.from("asdWe212$$:ss2@rYYT2").toString("base64")
  axios.post(
    'http://localhost:1992/users/checkUser/123',
    {
    "name":"xyz"
    },
    {
      headers:{"authorization":basicCode}
    }
  )
  .then(function (response) {
    // handle success
    //console.log(response);
    res.send(JSON.stringify(response.data))
  })
  .catch(function (error) {
    // handle error
    //console.log(error);
    res.send(JSON.stringify(error))
  })
  .then(function () {
    // always executed
  });

})




app.listen(port, () => {
  console.log(`Example app listening on port ${port} fsdfd ${pss}`)
})





// HTTP-SERVER
// express
// GET Request
// res.send, res.json,   res.sendFile
// POSTMAN
// POST Request
// Body Parser Middleware
// Bootstrap
