const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        require: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Products', productsSchema);