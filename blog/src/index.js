const express = require('express')
const path = require('path')
var morgan = require('morgan')
var handlebars  = require('express-handlebars');

const app = express()
const port = 8000

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan('combined'))
app.engine('hbs', handlebars({
    extname:".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})