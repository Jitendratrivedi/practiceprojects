const mongoose = require('mongoose')
//require("mongoose-type-email")
const validator = require('validator')
//const ObjectId = mongoose.Schema.Types.ObjectId


//Schema
const AuthorSchema = new mongoose.Schema({
	firstName: { type: String,trim :true },
	lastName: { type: String,trim :true },
	title: {
		type: String,
		enum: ["Mr", "Mrs", "Miss"]
	},
	email: {
		type: String,
		unique: true},
	// 	validate(value){
	// 		if (!validator.isEmail(value)){
	// 			throw new Error("invalid email");
	// 		}}
	// ,
	password: { type: String}

})

module.exports = mongoose.model('Author', AuthorSchema)//authors




