const express=require('express');
const chalk=require('chalk');



var app= express();//object creation
app.set('views','./src/views');
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.render('index',{list:['book1','book2','book3'],
      title:"Library"});

});


// app.get('/',(req,res)=>{
//     res.send('hello from my library');
app.listen(3000,function(){
    console.log('listening to port'+chalk.red('3000'));
});