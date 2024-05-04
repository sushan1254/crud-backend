const productModel = require("../models/productModel")

exports.createProduct =(req,res)=>{
    const reqBody = req.body

    productModel.create(reqBody).then((result)=>{
        res.status(200).json({status:'success', message:'succuessfully data created'})
    })
    .catch((err)=>{
        res.status(404).json({status:err})
    })
}

exports.readProduct=(req,res)=>{
    const query = {}
    productModel.find(query).then((result)=>{
        res.status(200).json({status:'success' , data:result})
    }).catch((err)=>{
        res.status(404).json({status:err})
    })
}

exports.readOne =(req,res)=>{
    const reqBody =req.body
    const {id} = req.params

    productModel.findOne({_id:id},reqBody).then((result)=>{
        res.status(200).json({status:'success' , data:result})
    }).catch((err)=>{
        res.status(404).json({status:err})
    })
}

exports.updateProduct=(req,res)=>{
    const reqBody = req.body
    const {id} = req.params

    productModel.updateOne({_id:id},reqBody).then((result)=>{
        res.status(200).json({status:'success' , message:'successfully update data'})
        
    }).catch((err)=>{
        res.status(404).json({status:err})

    })
}

exports.deleteProduct =(req,res)=>{
    const reqBody = req.body
    const {id} = req.params
    productModel.deleteOne({_id:id},reqBody).then((result)=>{
        res.status(200).json({status:'success' , message:'successfully delete data'})
    }).catch((err)=>{
        res.status(404).json({status:err})

    })
}
exports.Main =(req,res)=>{
    console.log('main')
}