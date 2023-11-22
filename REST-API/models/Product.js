const { Schema, model, Types } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+$/i


const productSchema = new Schema({
    title: { type: String, required: true, minlength: [2, 'Title must be at least 2 characters long'] },
    brand: { type: String, required: true, minlength: [3, 'Brand must be at least 3 characters long'] },
    category: {required: true,type: String,enum:
    ['Drill machines',
    'Electrical screwdrivers',
    'Rechargable kits',
    'Jig saws',
    'Grinders',
    'Hand tools'
    ],default: ''},
    weigth: { type: Number, required: true, min: [1, 'Weigth must be at least 1kg!'] },
    price: { type: Number, required: true, min: [15, 'Price must be at least 15BGN!'] },
    img: { type: String, required: [true, 'Image URL is required'], validate:{
        validator: (value)=> URL_PATTERN.test(value),
        message : "Image URL is not valid "
    } },
    _ownerId: { type: Types.ObjectId, ref: 'User', required: true },
    }, 
    { timestamps: { createdAt: 'created_at' } });

const Product = model('Product', productSchema);

module.exports = Product;