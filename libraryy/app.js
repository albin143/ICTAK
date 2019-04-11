const express=require('express');
const chalk=require('chalk');
const booksRouter=express.Router();
const authorRouter=express.Router();

var app= express();//object creation
app.use(express.static('./public'));
app.use(express.urlencoded());
app.set('views','./src/views');
app.set('view engine','ejs');

booksRouter.route('/')
.get((req,res)=>{
    res.render("books",{
        nav:[
            {link:'/books',title:'books'},
            {link:'/authors',title:'authors'}   
        ],
        title:"Books "});
});

booksRouter.route('/single')
.get((req,res)=>{
    res.send("good");
});
app.use('/books',booksRouter);

app.get('/',function(req,res){
    res.render('index',{
        nav:[
            {link:'/books',title:'books'},
            {link:'/authors',title:'authors'}   
        ],
        title:"Library"});
});


authorRouter.route('/')
.get((req,res)=>{
    res.render("author",{
        nav:[
            {link:'/books',title:'books'},
            {link:'/authors',title:'authors'}   
        ],
        title:"Author: Albin"});
});
app.use('/authors',authorRouter);


// app.get('/',(req,res)=>{
//     res.send('hello from my library');
app.listen(3010,function(){
    console.log('listening to port'+chalk.green('3010'));
});