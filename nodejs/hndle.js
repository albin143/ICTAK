const express=require('express'); //loading the express
const exph=require('express-handlebars');

var hndle=express();// the express is must use the function name
hndle.engine('handlebars',exph({defaultLayout:'mainpage'}));
hndle.set('view engine','handlebars');
hndle.use(express.static('views/static'));
hndle.use(express.urlencoded())// data fetching
hndle.post('/getdata',(req,res)=>{
    //res.send("data accepted")
    var name=req.body.getname;
    var address=req.body.getaddress;
    var place=req.body.getplace;
    var mobile=req.body.getmobile
    var email=req.body.getemail;
    // res.send(name);
    console.log(name)
    console.log(address)
    console.log(place)
    console.log(email)
    console.log(mobile)
});
hndle.get('/',(req,res)=>{
    res.render("index");
});
hndle.get('/about',(req,res)=>{
    res.render("about")
})
hndle.get('/Contact',(req,res)=>{
    res.render("contact")
})
hndle.get('/gallery',(req,res)=>{
    res.render("gallery")
})
hndle.listen(3000);