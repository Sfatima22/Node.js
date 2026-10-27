const express=require('express');

const morgan=require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
// express app
const app= express();
//connect to mongodb
const dbURI = 'mongodb+srv://fatima12:fatima12@cluster0.8endqy2.mongodb.net/node-tut?retryWrites=true&w=majority';
mongoose.connect(dbURI)
  .then(() => {
    console.log('connected to db');
    app.listen(3000, () => console.log('listening on 3000'));
  })
  .catch((err) => console.log('DB error:', err.message));
// listen for request

//register view engine
app.set('view engine', 'ejs');



//middleware static files
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(morgan('dev'));




app.get('/', (req,res)=> {
    res.redirect('/blogs');
}); 


app.get('/about', (req,res)=> {
   // res.send('<p> about page <p>');
     res.render('about',  {title: "about"});
}); 

//blog routes
app.get('/blogs', (req,res)=> {
  Blog.find().sort({created: -1})
  .then((result)=>{
    res.render('index', {title: 'all blogs', blogs: result
    })
  })
  .catch((err)=>{
    console.log(err);
  })
})

app.post('/blogs', (req,res) => {
   const blog = new Blog(req, Body);

   blog.save()
   .then((result) =>{
    res.redirect('/blogs');
   })
   .catch((err) => {
    console.log(err);

   })
})
//redirects
app.get('/blogs/create',(req,res)=>{
    res.render('create',  {title: "create a new blog"});
});
//404 page
app.use((req,res)=>{
    res.status(404).render('404',  {title: "404"});
});