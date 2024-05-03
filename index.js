const express = require("express") ;


const app = express();
app.set('view engine', 'ejs');
app.use(express.static('views'));



app.get('/', (req, res) => {
    // Render the 'index.ejs' template and pass data to it
    res.render('home')
  });

  app.get('/contact', (req, res) => {
    // Render the 'index.ejs' template and pass data to it
    res.render('contact');
  });
  app.get('/serever', (req, res) => {
    // Render the 'index.ejs' template and pass data to it
    res.render('serever');
  });


  

app.listen(5000, () => {
    console.log("server is up on 5000");
  });
  