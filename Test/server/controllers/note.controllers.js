const Note = require("../models/note.models")
//Get all
module.exports.findAllNotes = (req, res) => {
    Note.find().sort({createdAt:-1})
    .then(allNotes => res.json(allNotes))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
    };
// / get one note by id
module.exports.findOneNote = (req, res)=> {
    console.log(req.params.id);
    Note.findOne({_id:req.params.id})
    .then(oneNote =>{
        res.json(oneNote)
    })
    .catch(err => res.json({message: "somthing went wrong", error: err}));
};

//Create 
module.exports.createNewNote = (req, res) => {
    Note.create(req.body)
        .then(newNote => res.json(newNote ))
        .catch(err => res.status(400).json(err))
    };
//update
module.exports.updateExistingNote = (req, res) => {
    Note.findOneAndUpdate(req.params.id , req.body, { new: true, runValidators:true })
        .then(updatedNote => res.json({updatedNote }))
        .catch(err => res.status(400).json(err));
};
// /delete
module.exports.deleteAnExistingNote = (req, res) => {
    Note.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    };