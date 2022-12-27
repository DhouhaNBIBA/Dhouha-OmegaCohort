const Product = require("../models/products.models")
//Get all
module.exports.findAll = (req, res) => {
    Product.find().sort({createdAt:-1})
    .then(allProduct => res.json(allProduct))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
    };
// / get one note by id
module.exports.findOneProduct = (req, res)=> {
    console.log(req.params.id);
    Product.findOne({_id:req.params.id})
    .then(oneProduct =>{
        res.json(oneProduct)
    })
    .catch(err => res.json({message: "somthing went wrong", error: err}));
};

//Create 
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct ))
        .catch(err => res.status(400).json(err))
    };
//update
module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(req.params.id , req.body, { new: true, runValidators:true })
        .then(updatedProduct => res.json({updatedProduct }))
        .catch(err => res.status(400).json(err));
};
// /delete
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    };