const http= require('http')


const server= http.createServer((req,res)=>{
    console.log("request made");
    console.log(req.url);
    console.log(req.method)


    res.setHeader('Content-type','text/html')
    res.write("<h1>haii</h1>")
    res.write("<h1>do it anything for you</h1>")
    res.end()

  

})

server.listen(3000, 'localhost',()=>{
    console.log("server is listioning")
})