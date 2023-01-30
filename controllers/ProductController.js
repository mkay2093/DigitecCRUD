const db = require('../models')

/**
    Product Model
*/
const Product = db.products

/**
  Create Product
 */
const addProduct = async (req, res) => {

    let info = {
        title: req.body.title,
        description: req.body.description,
        type:req.body.type,
        shopId:req.params.shopId,
    }
    console.log(info);
    const product = await Product.create(info)
    let data = {
        message:"Product added",
        success:true,
    }
    res.status(200).finish(data)
}

/**
  Get all Products
 */
const getAllProducts = async (req, res) => {
    let id = req.params.shopId
    let products = await Product.findAll({ where: { shopId: id }})
    let data = {
        data:products,
        success:true,
    }
    res.status(200).finish(data)
}

/**
    Get Product by id
 */
const getOneProduct = async (req, res) => {
    let id = req.params.id
    let product = await Product.findOne({ where: { id: id }})

    let data = {
        data:product,
        success:true,
    }
    res.status(200).finish(data)
}

/**
    Update Product
 */
const updateProduct = async (req, res) => {

    let id = req.params.id

    const product = await Product.update(req.body, { where: { id: id }})
    let data = {
        message:"Product updated",
        success:true,
    }
    res.status(200).finish(data)
}

/**
    Delete Product
 */
const deleteProduct = async (req, res) => {

    let id = req.params.id

    await Product.destroy({ where: { id: id }} )
    let data = {
        message:"Product deleted",
        success:true,
    }
    res.status(200).finish(data)
}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
}