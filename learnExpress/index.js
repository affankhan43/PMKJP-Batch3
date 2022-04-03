const express = require('express')
const app = express()
const port = 1992
const pss = "asdsad"

app.get('/home/about', (req, res) => {
  res.send('Hello World!')
  // console.log(req)
  // console.log(res)
})

app.get('/home', (req, res) => {
  res.send('Welcome Home! End')
  // console.log(req)
  // console.log(res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} fsdfd ${pss}`)
})
