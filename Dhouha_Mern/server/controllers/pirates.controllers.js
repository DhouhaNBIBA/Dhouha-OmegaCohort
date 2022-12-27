const Pirate = require("../models/pirates.models")
//Get all
module.exports.findAllPirates = (req, res) => {
    Pirate.find().sort({name: 1})
    .then(allPirates => res.json(allPirates))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
    };
// / get one note by id
module.exports.findOnePirate = (req, res)=> {
    console.log(req.params.id);
    Pirate.findOne({_id:req.params.id})
    .then(onePirate =>{ res.json(onePirate)})
    .catch(err => res.json({message: "somthing went wrong", error: err}));
};
//Create 
module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json({newPirate} ))
        .catch(err => res.status(400).json(err))
    };
//update
module.exports.updatePirate = (req, res) => {
    Pirate.findOneAndUpdate(req.params.id , req.body, { new: true, runValidators:true })
        .then(updatedPirate => res.json({updatedPirate }))
        .catch(err => res.status(400).json(err));
};
// /delete
module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    };


// module.exports.updateAuthor = (req, res) =>{
//     Author.findOneAndUpdate({ _id: req.params.id },req.body,{new: true, runValidators: true})
//         .then(author => res.json ({ author}))
//         .catch(err => res.status (400).json(err));
// };

// ADD NEW BOOK

// module.exports.addReview= (req, res) => {
//     Pirate.findByIdAndUpdate (req.params.id, {$push: {oReview: req.body}}, {new:true, runValidators:true})
//     .then(movie => res.json(movie))
//     .catch((err)=> res.status(400).json(err));
// };
// module.exports.addReview = (req, res) => {
//     Pirate.findOneAndUpdate(
//         { _id: req.params.id },
//         { $push: { otherReview: req.body } },
//         {
//         new: true,
//         runValidators: true,
//         }
//     )
//         .then((Pirate) => res.json(Pirate))
//         .catch((err) => res.status(400).json(err));
//     };

    // module.exports.addReviews = (req, res) => {
    //     Pirate.findByIdAndUpdate (req.params.id, 
    //         {$push: {otherReview: req.body}}, 
    //         {new:true, runValidators:true})
    //     .then(movie => res.json(movie))
    //     .catch((err)=> res.status(400).json(err));