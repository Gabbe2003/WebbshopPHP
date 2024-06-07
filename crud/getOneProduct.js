const Product = require('../models/product');

const getOneProduct = async (req, res) => {
    const { productId } = req.params;

    if(!productId) {
        return res.status(400).json({ message: 'Id is required in the search'});
    }

    console.log(productId)

    try {
        const products = await Product.findById(productId);
        console.log(products);
        return res.status(200).json(products);
    } catch (error) {
        console.error('Error while trying to retrieve products:', error);
        res.status(500).json({ message: 'Error while trying to retrieve the products', error });
    }
};

module.exports = { getOneProduct };
