const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connect to mongodb using mongoose
const dbURI = 'mongodb+srv://netninja:testing0880@nodetuts.niks3.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Nodetuts';
mongoose.connect(dbURI) // This is an asyncronous operation that returns a promise
        .then((result) => app.listen(3000)) // This will only start the server if the connection to the database is successful
        .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// listen for requests
// app.listen(3000);

// middleware & static files
app.use(express.static('public')); // Anything inside the public folder will be made available as static files to the front-end
app.use(express.urlencoded({ extended: true})); // This is a middleware that will parse the form data and attach it to the request object
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//    const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//    });

//    blog.save()  // here we are using blog instance to save the data to the database (not Blog model)
//        .then((result) => {
//             res.send(result);
//        })
//        .catch((err) => {
//             console.log(err);
//        });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()  // here we are using Blog model directly to find all the blogs (not blog instance)
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('67bfb031b2bb0363b089a815')
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })

// basic routes
app.get('/', (req, res) => {

    // res.send('<p>Home Page</p>'); // It automatically sets the content type to text/html based on the response type here
   // res.sendFile('./views/index.html', { root: __dirname }); // This will send the file to the browser
//    const blogs = [
//     { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
//     { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
//     { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' }
//    ];
     res.redirect('/blogs');
   
//    res.render('index', { title: 'Home', blogs });

});

app.get('/about', (req, res) => {

    // res.send('<p>About Page</p>'); // It automatically sets the content type to text/html based on the response type here
    // res.sendFile('./views/about.html', { root: __dirname }); // This will send the file to the browser

    res.render('about', { title: 'About' });

});

// Blog routes
app.use('/blogs', blogRoutes);

// redirects
// app.get('/about-me', (req, res) => {
//     res.redirect('/about');
// });


// 404 page : SHOULD be at the bottom of the code
app.use((req, res) => {
//   res.status(404).sendFile('./views/404.html', { root: __dirname }); 
     res.status(404).render('404', { title: '404' });
});