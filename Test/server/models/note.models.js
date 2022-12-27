const mongoose= require('mongoose');
const { boolean } = require('webidl-conversions');

const NoteSchema= new mongoose.Schema({
    title:{
        type : String ,
        required: [true, "Title is required"],
        minlength: [6, "Title name must be at least 6 characters long"]

    },
    content:{
        type : String ,
        required: [true, "Content is required"],
        minlength: [6, "content must be at least 6 characters long"]
    },
    isImportent:{
        type: Boolean,
        default: true
    }
},
{timestamps: true});

const Note = mongoose.model('Note', NoteSchema);
module.exports = Note ;