const express=require('express');

const morgan=require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
// express app
const app= express();
//connect to mongodb
const dbURI = 'mongodb+srv://fatima12:fatima12@cluster0.8endqy2.mongodb.net/node-tut?retryWrites=true&w=majority';
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
// listen for request

//register view engine
app.set('view engine', 'ejs');



//middleware static files
app.use(express.static('public'));

app.use(morgan('dev'));

app.get('/add-blog', (req,res) => {
   const blog = new Blog({
    title: 'new blog',
    snippet : 'about',
    body : 'more'
   });
   blog.save()
   .then((result) => {
     res.send(result)
   })
   .catch((err) => {
    console.log(err);
   });
});
app.get('/all-blogs', (req,res) => {
  Blog.find()
  .then((result)=> {
    res.send(result);
})
})


app.get('/', (req,res)=> {
    const blogs = [
  {title: 'Yoshi finds eggs', snippet: 'boil them and eat!!'},
  {title: 'Mario finds stars', snippet: 'keep staring at them'},
  {title: 'How to defeat bowser', snippet: 'ehhhh'},
];

    
  //  res.send('<p> home page <p>');
  res.render('index', {title: "home" , blogs});
}); 


app.get('/about', (req,res)=> {
   // res.send('<p> about page <p>');
     res.render('about',  {title: "about"});
}); 
//redirects
app.get('/blogs/create',(req,res)=>{
    res.render('create',  {title: "create a new blog"});
});
//404 page
app.use((req,res)=>{
    res.status(404).render('404',  {title: "404"});
});