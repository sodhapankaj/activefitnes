const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser")
require('./mongo.js');
require("./model/post.js")


const post = mongoose.model('post')

app.use(bodyparser.json())
app.use((req,res,next)=>{
	  
	res.header('Access-Control-Allow-Origin',"*");
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();
})

app.get("/",(req,res)=>{

   res.send("hi")

})


app.post("/", async (req,res)=>{

	try{
		  
		  const posts = new post();
		  console.log(req.body)
		  posts.name = req.body.name;
		  posts.dob = req.body.dob;
		  posts.age = req.body.age; 
		  posts.gender = req.body.gender;
		  posts.postcode = req.body.postcode;
		  posts.ethnic = req.body.ethnic;
		  posts.cn = req.body.cn;
		  posts.rgd = req.body.rgd;
		  posts.email = req.body.email;
		  posts.ename = req.body.ename;
		  posts.ecn = req.body.ecn;
		  await posts.save();

		  console.log("its perfect")
		  res.send(posts)
	}
	catch(error){
		  res.send(error)
	}
	 
 
 })



app.listen(8080,()=>{

	console.log("server is running at port 8080")
})