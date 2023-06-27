const exphbs = require('express-handlebars')
const express = require('express');
const path = require('path');

const app = express();

app.engine('handlebars', exphbs({ extname: '.hbs'}));
app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'views'));