const express=require('express');
const chalk=require('chalk');
const authorRouter=express.Router();

var app= express();//object creation
const nav=[{link:'/books',title:'books'},{link:'/authors',title:'authors'},{link:'/addbook',title:'add book'}];
const booksRouter=require('./src/routes/bookroutes')(nav);
const adminrouter=require('./src/routes/adminroutes')(nav);


app.use(express.static('./public'));
app.use(express.urlencoded());
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/addbook',adminrouter);

app.set('views','./src/views');
app.set('view engine','ejs');



app.get('/',function(req,res){
    res.render('index',
        {
            nav,
        
        title:"Library"});
});






authorRouter.route('/')
.get((req,res)=>{
    res.render("author",{
        nav,
        title:"Author: Albin"});
});



// app.get('/',(req,res)=>{
//     res.send('hello from my library');
app.listen(4000,function(){
    console.log('listening to port'+chalk.green('3010'));
});