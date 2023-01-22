const express = require('express')
const router = express.Router()
const Product = require('../models/products')
const { Op } = require('sequelize')

router.get('/', async (req, res) => {
    try {
        const foundProducts = await Product.findAll({
            order: [ [ 'productPrice', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new product',
            data: newProduct
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.update(req.body, {
            where: {
                productName: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedProduct} product`
        })
    } catch(err) {
        res.status(500).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedProducts = await Product.destroy({
            where: {
                productName: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedProducts} product`
        })
    } catch(err) {
        res.status(500).json(err)
    }
});

module.exports = router