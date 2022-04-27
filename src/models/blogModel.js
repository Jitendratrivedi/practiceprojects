const mongoose = require('mongoose')
const ObjectId= mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema( {
    title: {
         type: String,
         required: true
        }, 
    body: {
        type:String,
        required:true
    }, 
    author_id: {
        type: ObjectId,
        ref: "Author"
    },
    tags:[String],
    category:[String],
    subcategory:[String],
    isDeleted:{
        type:Boolean,
        default:false
    },
    isPublished:{
        type:Boolean,
        default:false
    },
    publishedat:{
        type:String
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    deletedAt:{
        type:String
    }

}, { timestamps: true });


module.exports = mongoose.model('Blog', blogSchema)



// { title: {mandatory}, body: {mandatory}, authorId: {mandatory, refs to author model}, tags: {array of string}, category: {string, mandatory, examples: [technology, entertainment, life style, food, fashion]}, subcategory: {array of string, examples[technology-[web development, mobile development, AI, ML etc]] }, createdAt, updatedAt, deletedAt: {when the document is deleted}, isDeleted: {boolean, default: false}, publishedAt: {when the blog is published}, isPublished: {boolean, default: false}}