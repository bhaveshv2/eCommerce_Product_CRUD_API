const mongoose=require('mongoose');

//The product schema defination
const productSchema = new mongoose.Schema({
    id:{
        type:Number,
    },
    name:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },   
},{
    timestamps: true
});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;