const { getAllBlogs, renderCreateBlog, createBlog, getBlogById, getEditBlog, editBlog, deleteBlog } = require('../controllers/blog/blogController');

const router = require('express').Router();


router.route('/').get(getAllBlogs);

//create blog
router.route('/createBlog').get(renderCreateBlog).post(createBlog);


//view blog by id
 router.route('/blogs/:id').get(getBlogById);

 //get and post edit blog
    router.route('/editBlog/:id').get(getEditBlog).post(editBlog);

//delete blog
router.route('/delete/:id').get(deleteBlog);

module.exports = router;    
