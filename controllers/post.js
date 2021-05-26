const Post = require('../models/Post')
const bodyparser = require('body-parser')
exports.getPost = (req,res) =>
{
    const posts = Post.find()
    .then(posts=>{
        res.status(200).json({ posts: posts});
    })    
    .catch(err => console.log(err));
}
exports.createPost = (req,res) => {const post = new Post(req.body)
//console.log("Creating Post",req.body)
post.save()
.then(result =>{
    res.status(200).json({
        post:result
    });
});
}
