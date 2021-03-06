const express = require('express');
const router = express.Router();
const Blog = require('../../models/blog');



router.get('/blogs', async(req, res) => {
    const blogs = await Blog.find({});
    res.render('blogs/index', { blogs: blogs });
})


router.get('/blogs/new', (req, res) => {
    res.render('blogs/new');
})




router.post('/blogs', async(req, res) => {
    
    await Blog.create(req.body.blog);

    res.redirect('/blogs');
})



router.get('/blogs/:id', async(req, res) => {
    
    const blog = await Blog.findById(req.params.id).populate('reviews');

    res.render('blogs/show', { blog: blog });
})


router.get('/blogs/:id/edit', async(req, res) => {
    
    const blog = await Blog.findById(req.params.id);

    res.render('blogs/edit', { blog: blog });
})



router.patch('/blogs/:id', async(req, res) => {
    
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body.blog);

    res.redirect(`/blogs/${req.params.id}`);
})



router.delete('/blogs/:id', async(req, res) => {
    
    await Blog.findByIdAndDelete(req.params.id);

    res.redirect('/blogs');
})


module.exports = router;