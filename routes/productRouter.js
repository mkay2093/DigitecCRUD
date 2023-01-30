const express = require('express');
const productController = require('../controllers/ProductController')
let router = express.Router();

// Products router
router.post('/add/:shopId', productController.addProduct)

router.get('/all/:shopId', productController.getAllProducts)

router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router;