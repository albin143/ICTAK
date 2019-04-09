const express=require('express'); //loading the express


var app=express();// the express is must use the function name
app.get('/',(req,res)=>{
    res.send('[{"name":"tom","age":23},{"name":"riya","age":23]'
}); //the route defined "get" / is the priliminary route
app.listen(3000) // 3000 is the port to run