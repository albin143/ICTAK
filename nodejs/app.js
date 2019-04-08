const express=require('express'); //loading the express


var app=express();// the express is must use the function name
app.get('/',(req,res)=>{
    res.send("<marquee><h1> വെല്‍കം റ്റൂ ഊട്ടി നൈസ് റ്റൂ മീറ്റ് യൂ </h1></marquee>")
}); //the route defined "get" / is the priliminary route
app.get('/home',(req,res)=>{
    res.send("welcom to our web site");
});
app.listen(3000) // 3000 is the port to run