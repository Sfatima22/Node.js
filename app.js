const express=require('express');
// express app
const app= express();
// listen for request

//register view engine
app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req,res)=> {
    const blogs = [
//   {title: 'Yoshi finds eggs', snippet: 'boil them and eat!!'},
//   {title: 'Mario finds stars', snippet: 'keep staring at them'},
//   {title: 'How to defeat bowser', snippet: 'ehhhh'},
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