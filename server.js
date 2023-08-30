// const saleItem = require('./config/seed')
// const express = require('express')
// const SaleItem =require('./models/saleitemSchema')


// const app = express()
// app.use(express.json())
// //index
// app.get('/item', (req,res) => {
//      res.send(saleItem)
// })
// //show
// app.get('/item/:id', (req, res) => {
//      res.send(saleItem[req.params.id]);
// })

//  //create
//  app.post('/item', (req,res) => {
//      res.send(req.body)
//  }

//  )
// app.listen(3008,() => {
//      console.log("I hear you on this port 3008")
// })
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())
app.use('/api/item', require('./controllers/routeController'))
app.get('/api/item', (req, res) => {
  res.send('<h1>Hi<h1>')
})

app.listen(3008, function () {
  console.log('listening on 3008')
})