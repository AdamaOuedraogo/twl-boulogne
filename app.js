const express = require('express');
const expressEdge = require('express-edge');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload')
const Post = require('./database/models/post')


const app = new express();

mongoose.connect('mongodb://localhost/node-js-blog');

const createPostController = require('./controlers/createPost');
const homePageController = require('./controlers/homePage');
const storePostController = require('./controlers/storePost');
const getPostController = require('./controlers/getPost');
const createUserController = require('./controlers/createUser');
const storeUserController = require('./controlers/storeUser');





app.use(fileupload());
app.use(express.static('public'));
app.use(expressEdge);
app.set('views',`${__dirname}/views`);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


const storePost = require('./middleware/storePost');

app.use('/post/store',storePost);
app.get('/', homePageController);
app.get('/post/:id',getPostController)
app.get('/posts/new', createPostController);
app.post('/post/store',storePostController)
app.get('/auth/register',createUserController);
app.post('/user/register', storeUserController);




app.listen((3000),()=>{
    console.log("App listen on port 3000")
})