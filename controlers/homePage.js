const Post = require('../database/models/post') ;

module.exports = async (req, res)=>{
      //res.sendFile(path.resolve(__dirname, 'pages/index.html'));
      const posts = await Post.find({})
      res.render('index', {
          posts
      })
}