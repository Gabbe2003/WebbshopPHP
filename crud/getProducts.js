const Product = require('../models/product');

const getAllProducts = async (req, res) => {
    const { _id, name, price } = req.query;

    let query = {};
    if (_id) query._id = _id; 
    if (name) query.name = { $regex: name, $options: 'i' };
    if (price) query.price = Number(price);

    try {
        const products = await Product.find(query);
        if (products.length) {
            res.json(products);
        } else {
            res.status(404).json({ message: 'No products found matching the criteria' });
        }
    } catch (error) {
        console.error('Error while trying to retrieve products:', error);
        res.status(500).json({ message: 'Error while trying to retrieve the products', error });
    }
};

module.exports = { getAllProducts };
