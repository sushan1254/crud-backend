const mongoose = require('mongoose')

const DatabaseSchema = mongoose.Schema({
    ProductName:{type:String,require:true},
    ProductCode:{type:String,require:true},
    Img:{type:String,require:true},
    Category:{type:String,require:true},
    Qty:{type:String,require:true},
    discount:{type:String,require:true},
    discountPrice:{type:String,require:true},
    Price:{type:String,require:true},
    createdDate:{type:Date , default:Date.now()},
    UpdatedDate:{type:Date , default:Date.now()}
},{timestamps:true,versionkey:false})

const productModel = mongoose.model('products', DatabaseSchema)

module.exports=productModel