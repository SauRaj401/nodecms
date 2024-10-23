const db = require("../../model");

exports.renderCreateBlog = (req, res) => {  
    res.render('createBlog');
};

exports.createBlog = async (req, res) => {
     // console.log(req);
    // res.send('<h1>Hdddelldo Wodrld!</h1>');

    //destructuring
    console.log("hellloo" +  req.body);
    const {title, subtitle, description} = req.body;
   await db.blogs.create({
        title: title,
        subtitle: subtitle,
        description: description
    });


    res.redirect('/');

    //using sequelize to insert to database

    // console.log(req.body);
    // res.send('createBlog');
    };   


    //get all blogs
exports.getAllBlogs = async (req, res) => {
    await db.blogs.findAll().then((blogs) => {
        res.render('blogs', {blogs: blogs});
    });
};

//blog by id
exports.getBlogById = async (req, res) => {
   
    await db.blogs.findByPk(req.params.id).then((blog) => {
        res.render('blog', {blog: blog});
    });
};

// //edit blogs 
// exports.editBlog = async (req, res) => {
//     await db.blogs.findByPk(req.params.id).then((blog) => {
//         res.render('editBlog', {blog: blog});
//     });
// };

// get edit blog
exports.getEditBlog = async (req, res) => {
    await db.blogs.findByPk(req.params.id).then((blog) => {
        res.render('editBlog', {blog: blog});
    });
};


//post edit blog
exports.editBlog = async (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const subtitle = req.body.subtitle;
    const description = req.body.description;
    await db.blogs.update({
        title: title,
        subtitle: subtitle,
        description: description
    }, {
        where: {
            id: id
        }
    });
    res.redirect('/');
};

//delete blog
exports.deleteBlog = async (req, res) => {
    await db.blogs.destroy({
        where: {id: req.params.id}
    });
    res.redirect('/?nocache=' + new Date().getTime());
};