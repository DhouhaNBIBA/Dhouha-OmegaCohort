const Author =require('../models/auther.models');

// ADD NeW Author
module.exports.addAuthor = (req, res) =>{
    Author.create(req.body)
    .then(author => res.json(author))
    .catch( err => res.status(400).json(err))
}

// Get Alll
module.exports.getAllAuthors = (req, res) =>{
    Author.find().sort({createdAt:-1})
    .then(authors => res.json(authors))
    .catch( err => res.status(400).json(err))
}
// Get one by ID
module.exports.getAuthor = (req, res) =>{
    Author.findOne({_id:req.params.id})
    .then(oneAuthor => res.json(oneAuthor))
    .catch( err => res.status(400).json(err))
}

// Update Author
module.exports.updateAuthor = (req, res) =>{
    Author.findOneAndUpdate({ _id: req.params.id },req.body,{new: true, runValidators: true})
        .then(author => res.json ({ author}))
        .catch(err => res.status (400).json(err));
};
//DELETE Author
module.exports.delet = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result }))
    .catch(err => res.json({ message: "Something went wrong ‼", error: err }));
    };

//.********.Book.********
// ADD NeW Author
module.exports.addBook = (req, res) =>{
    Author.findOneAndUpdate({ _id: req.params.id },
        {$push:{books: req.body}}
        , {new: true, runValidators: true})
    .then(author => res.json(author))
    .catch( err => res.status(400).json(err))};
