const Product = require('../models/product');

const createProduct = async (req, res) => {
    const { name, description, price, imageUrl } = req.body;

    if (!name || !price) {
        return res.status(400).json({ message: 'Required fields are missing. Please provide name and price' });
    }

    if (typeof name !== 'string') {
        return res.status(400).json({ message: 'Invalid name. Name must be a string.' });
    }
    if (typeof description !== 'string' && description !== undefined) {
        return res.status(400).json({ message: 'Invalid description. description must be a string if provided.' });
    }
    if (typeof price !== 'number' || price < 0) {
        return res.status(400).json({ message: 'Invalid price. Price must be a non-negative number.' });
    }
    if (imageUrl && typeof imageUrl !== 'string') {
        return res.status(400).json({ message: 'Invalid image URL. Image URL must be a string if provided.' });
    }

    try {
        const newProduct = new Product({
            name, 
            description, 
            price, 
            imageUrl, 
        });
        const savedProduct = await newProduct.save();
        console.log(savedProduct);
        res.status(201).json({ message: 'Product has been created succesfully', name});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to create the product due to server error.', err });
    }
};
//Done
module.exports = { createProduct };
