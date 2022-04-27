const mongoose = require('mongoose');
 require('mongoose-type-email');


const authorSchema = new mongoose.Schema( {
    firstName: {
         type: String,
         required: true
        }, 
    lastName: {
        type:String,
        required:true
    }, 
    title:{
        type:String,
        enum:[ "Mr", "Mrs", "Miss"]
    },
    

    email:{
        type: mongoose.SchemaTypes.Email,
        required:[true,"Email Id is not valid"],
        unique:true
    },
    password:{
        type:String,
        required:true
    }

}, { timestamps: true });


module.exports = mongoose.model('Author', authorSchema)

// { fname: { mandatory}, lname: {mandatory}, title: {mandatory, enum[Mr, Mrs, Miss]}, email: {mandatory, valid email, unique}, password: {mandatory} }







