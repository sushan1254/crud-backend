const express = require('express')
const { createProduct, readProduct, readOne, updateProduct, deleteProduct } = require('../controllers/productControllers')

const router = express.Router()

router.post('/create', createProduct)
router.get('/read', readProduct)
router.get('/read/:id', readOne)
router.post('/update/:id' , updateProduct)
router.get('/delete/:id' , deleteProduct)




module.exports=router