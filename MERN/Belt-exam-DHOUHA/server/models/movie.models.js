const mongoose= require('mongoose');
// const { boolean } = require('webidl-conversions');

const MovieSchema= new mongoose.Schema({
    title:{
        type : String ,
        required: [true, "Title is required"],
        minlength: [6, "Title name must be at least 6 characters long"]

    },
    name:{
        type : String ,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
    rating:{
        type : Number,
        required: [true, "rating is required"],
        minlength: [1, "rating must be provided"],
        min :[0,"rating must be positive "], 
        max:[10,"Maximun Rating is 10 "]
    }, 
    review:{
        type : String ,
        required: [true, "Review is required"],
        minlength: [6, "Review must be at least 6 characters long"]
    },
    otherReview:[
        {
            oName:{
                type : String ,
                required: [true, "Name is required"],
                minlength: [3, "Name must be at least 3 characters long"]
            },
            oRating:{
                type : Number,
                required: [true, "rating is required"],
                minlength: [1, "rating must be provided"],
                min :[0,"rating must be positive "], 
                max:[10,"Maximun Rating is 10 "]
            },
            oReview:{
                type : String ,
                required: [true, "Review is required"],
                minlength: [6, "Review must be at least 6 characters long"]
            },
        }
    ]
    
},
{timestamps: true});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie ;