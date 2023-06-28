const exphbs = require('express-handlebars')
const express = require('express');
const path = require('path');

const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 4444;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

const homeController = require('./controllers/homeController');
app.get('/', homeController.getHomePage);

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});