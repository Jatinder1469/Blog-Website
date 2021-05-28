const express = require('express');
const router = express.Router();
const Blog = require('../../models/blog');
const Review = require('../../models/review');



router.post('/blogs/:id/review', async(req, res) => {

    const blog = await Blog.findById(req.params.id);
    const review = new Review(req.body.review);

    blog.reviews.push(review);

    await review.save();
    await blog.save();

    res.redirect(`/blogs/${req.params.id}`);
});


module.exports = router;