const http=require('http');
 
// const server=http.createServer((req,res)=>{
//     console.log(req.url, req.method);
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('Hello World');
//     res.end(); 
// });
// server.listen(3000, 'localhost', ()=>{
//     console.log('listening for requests on port 3000');
// }); 

const server=http.createServer((req,res)=>{
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>Hello World</p>');
    res.write('<p>Hello World 2</p>');
    res.end(); 
});
server.listen(3000, 'localhost', ()=>{
    console.log('listening for requests on port 3000');
}); 