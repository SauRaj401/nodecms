//server
const { name } = require('ejs');

const express = require('express');
const app = express();
const port = 3000;


//database connection
const db = require('./model/index');
const { where } = require('sequelize');
const { renderCreateBlog, createBlog, getBlogById, getAllBlogs, editBlog, deleteBlog, getEditBlog } = require('./controllers/blog/blogController');
const { register, renderRegister, renderLogin, login } = require('./controllers/auth/authController');
// db.sequelize.sync({ force: false }).then(() => {
//     console.log("yes re-sync done");
// });

//embedded js
// app.set('views', './views');
//what is view engine does in express and what is this command doing? app.set('view engine', 'ejs');?
//A view engine allows you to use static template files in your application.
// At runtime, the template engine replaces variables in a template file with actual values,
// and transforms the template into an HTML file sent to the client.
app.set('view engine', 'ejs');


//form bata data aayako chha and pars garna and controll gar
app.use(
    express.json()
);
app.use(express.urlencoded({ extended: true }));



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);


//import routes
const blogRoute = require('./routes/blogRoute');
const authRoute = require('./routes/auth/authRoute');
//use routes
app.use('', blogRoute);

app.use('', authRoute);




// app.get('/', (req, res) => {
//     // console.log(req);
//     // res.send('<h1>Hdddelldo Wodrld!</h1>');
//     res.render('home', {title: 'Home', name: 'Saurav'});
//     }
// );

// app.get('/', getAllBlogs);

//view single blog through id
// app.get('/blogs/:id', getBlogById);

//metod to edit the blog
// app.get('/editBlog/:id', getEditBlog);

//method to delete the blog
// app.get('/delete/:id', deleteBlog);


//method to edit the blog
//edit blog
// app.get('/edit/:id', async (req, res) => {
        
//         await db.blogs.findByPk(req.params.id).then((blog) => {
//             res.render('editBlog', {blog: blog});
//         });
    
//         }
//     );  

//editBlog function
// app.post("/editBlog/:id",editBlog);




//get register view 
// app.get('/register', renderRegister);


// // Handle registration form submission
// app.post('/register', register);

// //get login view
// app.get('/login', renderLogin);
// // Handle login form submission
// app.post('/login', login);


//what is nodemon?
//nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
//nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

//node --watch  app.js
//npm run manish, saurav, rahul if change in start in script in package.json

//what is ejs 
//EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. 
//No religiousness about how to organize things. No reinvention of iteration and control-flow.
// It's just plain JavaScript.
//npm install ejs

//template/view engine in js
//ejs

// what is the power of ejs?
//EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
// No religiousness about how to organize things. No reinvention of iteration and control-flow.
// It's just plain JavaScript. //pass dynamice data to html 
//examples
// <%  %>  - for js code
// <%= %> - for js expression
// <%# %> - for comments
// <%- %> - for unescaped output
// <% include file %> - for include file
// <% layout file %> - for layout file
// <% partial file %> - for partial file
// <% script %> - for script
// <% style %> - for style