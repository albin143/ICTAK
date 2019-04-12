const express=require('express');
const adminroutes=express.Router();
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
    res.send("നോക്കീ ഇരൂന്നോ....");
});
    return adminroutes;
    
}
module.exports=router;