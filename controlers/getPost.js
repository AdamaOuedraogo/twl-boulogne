const Post = require('../database/models/post')

module.exports = async(req,res)=>{
    //res.sendFile(path.resolve(__dirname,'pages/post.html'));

    const post = await Post.findById(req.params.id);

    res.render('post', {
        post
    })
}