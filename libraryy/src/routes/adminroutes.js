const express=require('express');
const adminroutes=express.Router();
const bookdata=require('../model/bookdata')

function router(nav){

    adminroutes.route('/')
    .get((req,res)=>{
        res.render("addbook",{
            nav,
            title:"Books ",
            
        });
    });
adminroutes.route('/add')
.get((req,res)=>{
    var item={
        title:req.param('title'),
        author:req.param('author'),
        genre:req.param('genre')
    }
    var book=new bookdata(item);
    book.save();
    res.redirect('/books');
});
    return adminroutes;
    
}
module.exports=router;