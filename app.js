const path = require('path');
const http = require('http');

const express = require('express');
const hbs = require('hbs');

let app = express();

app.set('appName', 'hello-advanced');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));




// routing example

const currentYear = new Date().getFullYear()

app.get('/index', (req, res) => {
    res.render('index.hbs', {title: 'index Page', text: 'Render of the index page', currentYear})
})

app.get('/about', (req, res) => {
    res.render('index.hbs', {title: 'About Page', text: 'Render of the about page', currentYear})
})


const server = http.createServer(app);

const boot = () => {
    server.listen(app.get('port'), () => {
        console.info(`Express server listening on port ${app.get('port')}`)
    })
};

const shutdown = () => {
    server.close()
};

if (require.main === module) {
    boot()
} else {
    console.info('Running app as a module');
    exports.boot = boot;
    exports.shutdown = shutdown ;
    exports.port = app.get('port')
}
