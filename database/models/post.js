const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    content: String,
    username: String,
    image: String,
    createdAt:{
        type:Date,
        default:Date.now
    }

})


const Post = new mongoose.model('Post',PostSchema);

module.exports = Post;
