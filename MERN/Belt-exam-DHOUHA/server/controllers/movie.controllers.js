const Movie = require("../models/movie.models")
//Get all
module.exports.findAllMovies = (req, res) => {
    Movie.find().sort({rating:-1})
    .then(allMovies => res.json(allMovies))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
    };
// / get one note by id
module.exports.findOneMovie = (req, res)=> {
    console.log(req.params.id);
    Movie.findOne({_id:req.params.id}).sort({rating:1})
    .then(oneMovie =>{ res.json(oneMovie)})
    .catch(err => res.json({message: "somthing went wrong", error: err}));
};

//Create 
module.exports.createNewMovie = (req, res) => {
    Movie.create(req.body)
        .then(newMovie => res.json({newMovie} ))
        .catch(err => res.status(400).json(err))
    };
//update
module.exports.updateExistingMovie = (req, res) => {
    Movie.findOneAndUpdate(req.params.id , req.body, { new: true, runValidators:true })
        .then(updatedMovie => res.json({updatedMovie }))
        .catch(err => res.status(400).json(err));
};

// module.exports.updateAuthor = (req, res) =>{
//     Author.findOneAndUpdate({ _id: req.params.id },req.body,{new: true, runValidators: true})
//         .then(author => res.json ({ author}))
//         .catch(err => res.status (400).json(err));
// };
// /delete
module.exports.deleteAnExistingMovie = (req, res) => {
    Movie.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    };
// ADD NEW BOOK

// module.exports.addReview= (req, res) => {
//     Movie.findByIdAndUpdate (req.params.id, {$push: {oReview: req.body}}, {new:true, runValidators:true})
//     .then(movie => res.json(movie))
//     .catch((err)=> res.status(400).json(err));
// };
module.exports.addReview = (req, res) => {
    Movie.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { otherReview: req.body } },
        {
        new: true,
        runValidators: true,
        }
    )
        .then((Movie) => res.json(Movie))
        .catch((err) => res.status(400).json(err));
    };

    // module.exports.addReviews = (req, res) => {
    //     Movie.findByIdAndUpdate (req.params.id, 
    //         {$push: {otherReview: req.body}}, 
    //         {new:true, runValidators:true})
    //     .then(movie => res.json(movie))
    //     .catch((err)=> res.status(400).json(err));