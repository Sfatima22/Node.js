const mongoose = require ('mongoose');
const schema = mongoose.Schema; 

const blogSchma = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet:{
        type: String,
        required: true 
    },
    body:{
        type: String,
        required: true 
    }
}, {timestamps: true });

const Blog = mongoose.model('Blog', blog.Schema);
module.exports= Blog;

