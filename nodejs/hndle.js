const express=require('express'); //loading the express
const exph=require('express-handlebars');

var hndle=express();// the express is must use the function name
hndle.engine('handlebars',exph({defaultLayout:'mainpage'}));
hndle.set('view engine','handlebars');
hndle.get('/',(req,res)=>{
    res.render("index");
});
hndle.get('/about',(req,res)=>{
    res.render("about")
})
hndle.listen(3500);