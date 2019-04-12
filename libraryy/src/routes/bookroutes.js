const express=require('express');
const booksRouter=express.Router();
function router(nav){
var books=[
    {
        title:"war and peace",
        genre:"historical fiction",
        author:"leve nicolayevich",
        
},
{
    title:"les miserables",
    genre:"historical fiction",
    author:"hog",
},
{
    title:"two state",
    genre:" fiction",
    author:"chethan",
},
{
    title:"the sceret",
    genre:"life",
    author:"byrne",
},
{
    title:"alchemist",
    genre:"fiction",
    author:"paulo",
},
{
    title:"half girlfriend",
    genre:"love",
    author:"chethan",
},
]
booksRouter.route('/')
.get((req,res)=>{
    res.render("books",{
        nav,
        title:"Books ",
        books
    });
});

booksRouter.route('/:id')
.get((req,res)=>{
  
    const id=   req.params.id;
    res.render(
        'book',
        {
            nav,
            title:"library",
            book:books[id]
        }
    )
});
return booksRouter;
}
module.exports=router;