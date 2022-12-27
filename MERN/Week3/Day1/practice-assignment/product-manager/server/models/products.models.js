const mongoose= require('mongoose');
const { boolean} = require('webidl-conversions');

const ProductSchema= new mongoose.Schema({
    title:{
        type : String ,
        required: [true, "Title is required"],
        minlength: [6, "Title name must be at least 6 characters long"]

    },
    price:{
        type : Number,
        required: [true, "Price is required"],
        minlength: [1, "Price must be provided"],
        min :[0,"Price must be positive "] 
    }, 
    discription:{
        type : String ,
        required: [true, "Discription is required"],
        minlength: [6, "Discription must be at least 6 characters long"]
    },
},
{timestamps: true});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product ;