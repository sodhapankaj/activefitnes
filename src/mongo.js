const mongoose = require('mongoose');
 require('dotenv').config();


mongoose.promise = global.promise;
mongoose.connect(process.env.mongourl)