const Product = require('../../../models/products');


//Async function for showing list of products
module.exports.index = async function(req,res){
    let products= await Product.find({});

    return res.status(200).json({
        message:"List of Products",
        products:products
    });
}

//Async function for adding into the database
module.exports.create = async function(req,res){
    try{
        let products= await Product.create({
            id:req.body.id,
            name:req.body.name,
            quantity:req.body.quantity,
        });

        //for viewing the data here, check if request is ajax request or not and the type of ajax request is XmlHttpREQUEST(xhr).
        
            //in response show the data of created product
            return res.status(200).json({
                data:{
                    products:products
                },
                message:"Product Created!"
            });

    }catch(err){
        console.log('*****',err);
        return res.status(500).json({
            message:"Create:Internal Server Error"
        });
    }
}

//Async function for adding into the database
module.exports.destroy = async function(req,res){
    try{
        let product = await Product.findById(req.params.id);

        product.remove();

        return res.status(200).json({
            message:"Product Deleted",
        })
    }catch(err){
        console.log('*****',err);
        return res.status(500).json({
            message:"Delete:Internal Server Error"
        });
    }
}

// Async function for updating the quantity of the product
module.exports.update = async function(req,res){
    try{
        let product = await Product.findById(req.params.id);
        //taking number from req.query.number and $inc is function to increase the quantity and store it into the db.
        let response = await Product.findByIdAndUpdate({_id:product._id},{$inc: {quantity:req.query.number}}); 
        //taking the updating value
        product.quantity= req.body.quantity;
        //.save() update the quantity received in above statement
        product.save();

        return res.status(200).json({
            data:{
                product:product
            },
            message:"Updating the quantity is successful",
        })
    }catch(err){
        console.log('*****',err);
        return res.status(500).json({
            message:"Update:Internal Server Error"
        });
    }
}