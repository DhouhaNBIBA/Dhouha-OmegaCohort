const mongoose= require('mongoose');
const { boolean} = require('webidl-conversions');

const AutherSchema= new mongoose.Schema({
    name:{
        type : String ,
        required: [true, "Name is required"],
        minlength: [6, "Name name must be at least 6 characters long"]

    },
    books:[
        {
            title:{
                type : String ,
                required: [true, "Name is required"],
                minlength: [6, "Name name must be at least 6 characters long"]
            },
            numberOfPages:{
                type : Number ,
                required: [true, "number of pages is required"],
                minlength: [1, "Number of page must be provided"],
                min :[0,"Number of page must be positive "]
                

            }
        }
    ]
},
{timestamps: true});

const Auther = mongoose.model('Auther', AutherSchema);
module.exports = Auther ;