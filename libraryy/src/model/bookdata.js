const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library112111');
const schema=mongoose.Schema;

var newbookschema= new schema({
    title:String,
    author:String,
    genre:String
});
var bookdata=mongoose.model('boook-data',newbookschema);
module.exports=bookdata;