const mongoose = require('mongoose')
const Post = require('./database/models/Post');

mongoose.connect('mongodb://localhost/node-js-test-blog');

// Post.create({
//     title:'mon second post',
//     description:'une deuxieme description,',
//     content:'Un deuxieme contenue'
// },(error,post)=>{

//     console.log(error,post);

// })


Post.find({},(error, post)=>{
    console.log(error,post);
})