const moment=require('moment')
const blogModel=require("../models/blogModel")
const authorModel=require("../models/authorModel")

const createBlog= async function(req,res){
   
    let data=req.body;
    let condition= await authorModel.findById(req.body.author_id)
    if(condition)
    {if(req.body.isPublished==true)
    {
        data.publishedAt= moment().format('YYYY-MM-DD')
        console.log(data)
    }
    let newdata=data
    console.log(req.body)
    let savedData= await blogModel.create(newdata)
    res.status(201).send({savedData})
}else {
    res.status(400).send("authorId is present")
}

// const getBlog  = async function(req,res){
//     let {...data} = req.query
//     console.log("which data" + data.title )

//     let getData = await BlogModel.find({isDeleted :false,isPublished:true, $or:[{authorId : data.authorId},{tags:data.tags},{category:data.category}] })
//     if(getData.length === 0){
//         res.status(404).send({status:false,error : "Page not found"})
//     }
    
//     res.status(200).send({data:getData})


// }

// const updateBlog = async function(req,res){
// let getId = req.params.blogId  //grab userid from params
// let data = req.body  // data to be updated
// if(data?.isPublished === true){ //if user want to publish 
//     data.publishedAt = Date.now()
// }
// if(data.isDeleted === true){ // if user want to delete
//     data.isDeletedAt = Date.now()
// }
// let check = await BlogModel.findByIdAndUpdate(getId,data,{new:true})
// res.status(200).send({status : true,msg : check})
// }


// module.exports = {createBlog,getBlog,updateBlog}














    
}
// const deleteBlog= async function(req,res){
   
//     let data=req.params.blogId;
//     console.log(req.params.blogId)
//     let blog= await blogModel.findOneAndUpdatema({_id:data},{isDeleted:true,deletedAt:moment().format('YYYY-MM-DD')})
//     if(blog)
//     {   
//        console.log(blog)
    
    
  
//     res.status(201).send(blog)
// }
// else {
//     res.status(400).send("blogId is present")
// }
    
// }

module.exports.createBlog=createBlog
module.exports .deleteBlog=deleteBlog