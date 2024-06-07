const express = require('express');
const router = express.Router();

const getProducts = require('../crud/getProducts');
const getOneProduct = require('../crud/getOneProduct');
const createProducts = require('../crud/createProduct');
const deleteProducts = require('../crud/deleteProducts');
const updateProduct = require('../crud/updateProduct');

router.get('/getOneProduct/:productId', getOneProduct.getOneProduct);
router.get('/getProducts', getProducts.getAllProducts);
router.post('/createProduct', createProducts.createProduct);
router.delete('/deleteProduct/:productId', deleteProducts);
router.put('/updateProduct/:productId', updateProduct);

module.exports = router;