const mymodule=require('./add_mdule')
var x=22;
var y=7;
var z=mymodule.addnum(x,y);
var b=mymodule.subnum(x,y);
var c=mymodule.div(x,y);
var d=mymodule.mul(x,y);
console.log(z)
console.log(b)
console.log(c)
console.log(d)