const mongoose= require('mongoose');
const { boolean } = require('webidl-conversions');

const PirateSchema= new mongoose.Schema({
    image:{
        type : String ,
        required: [true, "Title is required"],
        minlength: [6, "Title name must be at least 6 characters long"]

    },
    name:{
        type : String ,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
    phrase:{
        type : String ,
        required: [true, "Catch Pirate is required"],
        minlength: [10, "Phrase must be at least 10 characters long"]
    },
    chests:{
        type : Number,
        required: [true, "Treasure  chests is required"],
        minlength: [1, "Treasure  chests must be provided"],
        min :[0,"This must be positive "], 
    }, 
    pegLeg:{
        type: Boolean,
        default: true
    },
    hookHand:{
        type: Boolean,
        default: true
    },
    eyePatch:{
        type: Boolean,
        default: true
    },
    position:{
        type : String ,
        required: [true, "Position is required"]},},
    {timestamps: true});

const Pirate = mongoose.model('Pirate', PirateSchema);
module.exports = Pirate ;