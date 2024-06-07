const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true, 
        trim: true    
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0        
    },
    imageUrl: {
        type: String,  
        required: false 
    },
});

module.exports = mongoose.model('Product', ProductSchema);
