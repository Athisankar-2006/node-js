const exp= require('express')
const morgan =require('morgan')
const app =exp()


app.listen(3000);

app.use(morgan('dev'))

app.use((req,res,next)=>{
    console.log('middle ware')
    // console.log(req.host);
    // console.log(req.path);
    next();
})


app.use((req,res,next)=>{
    console.log('middle ware 2');
    next();
})


app.get('/',(req,res)=>{
    res.sendFile('./docs/index.html',{root: __dirname})
})

app.get('/join',(req,res)=>{
    res.sendFile('./docs/join.html',{root: __dirname})
})


app.get('/about',(req,res)=>{
    res.sendFile('./docs/about.html',{root: __dirname})
})

app.get('/joinus',(req,res)=>{
    res.redirect('/join') 
})

app.use((req,res)=>{
    res.status(404).sendFile('./docs/notFound.html',{root: __dirname})
})


//browser -> request ->server(middle ware) -> reponse ->browser