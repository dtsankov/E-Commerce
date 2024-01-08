const { Schema, model, Types } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate');

const URL_PATTERN = /^https?:\/\/.+$/i;

const productSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            minlength: [2, "Title must be at least 2 characters long"],
        },
        brand: {
            type: String,
            required: true,
            minlength: [3, "Brand must be at least 3 characters long"],
        },
        category: {
            required: false,
            type: String,
            enum: {
                values: [
                    "Drill machines",
                    "Electrical screwdrivers",
                    "Rechargeable kits",
                    "Jig saws",
                    "Grinders",
                    "Hand tools",
                ],
                message: 'Invalid category',
            },
            default: null,
        },
        weigth: {
            type: Number,
            required: true,
            min: [1, "Weigth must be at least 1kg!"],
        },
        price: {
            type: Number,
            required: true,
            min: [15, "Price must be at least 15EUR!"],
        },
        description: {
            type: String,
            required: true,
            minlength: [10, "Description must be at least 10 characters long"],
        },
        imageUrl: {
            type: String,
            required: [true, "Image URL is required"],
            validate: {
                validator: (value) => URL_PATTERN.test(value),
                message: "Image URL is not valid ",
            },
        },
        comments: [
            {
                userId: { type: Types.ObjectId, ref: "User", required: true },
                author: { type: String, required: true },
                text: { type: String, required: true },
            },
        ],
        _ownerId: { type: Types.ObjectId, ref: "User", required: true },
    },
    { timestamps: { createdAt: "created_at" } }
);

productSchema.plugin(mongoosePaginate)

const Product = model("Product", productSchema);

module.exports = Product;
