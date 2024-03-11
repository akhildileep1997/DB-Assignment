const mongoose = require('mongoose') // importing mongoose

// creating schema for products
const productSChema = new mongoose.model({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  SKU: {
    type: String,
    required: true,
  },
  categoryId: mongoose.Schema.Types.ObjectId,
  inventoryId: mongoose.Schema.Types.ObjectId,
  price: {
    type: Number,
    required: true,
  },
  discountId: mongoose.Schema.Types.ObjectId,
}, {
    timestamps:true
});

// creating model based on the schema
const ProductModel = mongoose.model("Product", productSChema)

// exporting the model for using in another file
module.exports = ProductModel