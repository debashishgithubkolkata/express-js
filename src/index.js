const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const templatePath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');
 
// To set the view engine in express
app.set('view engine', 'hbs');

// If i overwrite views, by the templates then i must mention template path
app.set('views', templatePath);

// Register partials path
hbs.registerPartials(partialPath); 

// To show index page
app.get('/', function(req, res){
    res.render('index', {
        title : 'Home'
    });
});

// To show project page
app.get('/project', function(req, res){
    res.render('project', {
        title : 'Our Projects'
    });
});

// To show about page
app.get('/about', function(req, res){
    res.render('about', {
        title : 'About Us'
    });
});

// To show about page
app.get('/city', function(req, res){
    res.render('city');
});

// If the url does not exist
app.get('*', (req,res)=>{
    res.render('404');
});

// Listen the server to the given port
app.listen(8000, '127.0.0.1', ()=>{
    console.log('Listening to the port : 8000');
});