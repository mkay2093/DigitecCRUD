const db = require('../models')

// create main Model
const ProductItems = db.productItems

// main work

// 1. create product

const addProductItem = async (req, res) => {

    let info = {
        title: req.body.title,
        description: req.body.description,
        productId:req.params.productId,
        color:req.body.color,
        size:req.body.size,
        price:req.body.price
    }

    await ProductItems.create(info)
    let data = {
        message:"Product item added",
        success:true,
    }
    res.status(200).finish(data)
}

// 2. get all products

const getAllProductItems = async (req, res) => {
    let productId = req.params.productId
    let productItems = await ProductItems.findAll({ where: { productId: productId }})
    let data = {
        data:productItems,
        success:true,
    }
    res.status(200).finish(data)

}

const updateProductItem = async (req, res) => {

    let id = req.params.id

    await ProductItems.update(req.body, { where: { id: id }})

    let data = {
        message:"Product item updated",
        success:true,
    }
    res.status(200).finish(data)


}

// 5. delete product by id

const deleteProductItem = async (req, res) => {

    let id = req.params.id

    await ProductItems.destroy({ where: { id: id }} )

    let data = {
        message:"Product item deleted",
        success:true,
    }
    res.status(200).finish(data)

}

module.exports = {
    addProductItem,
    getAllProductItems,
    updateProductItem,
    deleteProductItem
}