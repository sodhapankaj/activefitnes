const mongoose = require('mongoose');

const post = mongoose.Schema({

	name:{

		type:String,
		required:true

	    },

	dob:{
		type:String,
		required:true
	},
	age:{
		type:Number,
		required:true
	},
	gender:{
		type:String,
		required:true
	},
	postcode:{
		type:Number,
		required:true
	},
	ethnic:{
		type:String,
		required:true
	},
	cn:{
		type:Number,
		required:true
	},
	rgd:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	ename:{
		type:String,
		required:true
	},
	ecn:{
		type:Number,
		required:true
	}



})
console.log("its created")


module.exports = mongoose.model("post",post);