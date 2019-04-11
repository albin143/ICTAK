const express=require('express');
const chalk=require('chalk');



var app= express();//object creation
app.set('views','./src/views');
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.render('index');
});



// app.get('/',(req,res)=>{
//     res.send('hello from my library');
app.listen(3000,function(){
    console.log('listening to port'+chalk.green('3000'));
});