 const {model ,Schema, default: mongoose}= require('mongoose')
const saleItemSchema = new Schema({
     id: {type: String},
     product: {type: String, required:true},
     detail: {type: String, required:true}, 
     unitMeasure: {type: String, required:true},
     unitsAvailable: {type: Number, required:true},
     unitCost: {type: Number, required:true},
     cost: {type: Number, required:true},
     recipe: {type: Boolean}, 
     image: {type: String}
})

const SaleItem = mongoose.model('SaleItem',saleItemSchema)
module.exports = SaleItem


