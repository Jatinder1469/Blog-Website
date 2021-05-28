const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    img: {
        type: String,
    },
    author: {
        type: String,
        
    },
    text: {
        type: String,
    } ,

})

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;