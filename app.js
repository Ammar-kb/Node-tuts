const express = require('express');
const app = express();
const sum1 = require('./index')
const morgan = require('morgan');
const Post = require('./routes/getPost');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
dotenv.config()

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true },{ useUnifiedTopology: true })
.then(() => {
    console.log("DB Connected") 
})

mongoose.connection.on('error', (err) =>console.log(`Error Occured ${err.message}`))

app.use(morgan("dev"));
app.use(bodyparser.json());
app.use('/', Post);

const port = process.env.PORT || 5000;
console.log(Post.toString());
app.listen(port,()=>console.log(`Node is running on the port :${port}`));