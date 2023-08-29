const saleItem = require('./config/seed')
const express = require('express')
const SaleItem =require('./models/saleitemSchema')


const app = express()
app.use(express.json())
//index
app.get('/item', (req,res) => {
     res.send(saleItem)
})
//show
app.get('/item/:id', (req, res) => {
     res.send(saleItem[req.params.id]);
})

 //create
 app.post('/item', (req,res) => {
     res.send(req.body)
 }

 )
app.listen(3008,() => {
     console.log("I hear you on this port 3008")
})