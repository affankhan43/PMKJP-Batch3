const http = require('http')
var url = require('url');

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  console.log(req.url)
  if(req.url == '/about'){
    res.statusCode = 200
    res.end('<h1>This is about page</h1>')
  }else if(req.url == '/home'){
    res.statusCode = 200
    res.end('<h1>This is homepage</h1>')
  }else if(req.url == '/home/about'){
    res.statusCode = 200
    res.end('<h1>This is About Page under the homepage</h1>')
  }else{
    res.statusCode = 404
    res.end('404 Page Not Found')
  }
  //var txt = url.parse()
  
  //res.end('<h1>Hello, World!</h1>')
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
