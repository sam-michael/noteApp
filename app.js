const express = require('express');
const path = require('path');


let app = express();

app.set('appName', 'hello-advanced');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

// uncomment this line to use pug view engine
app.set('view engine', 'pug');

app.all('*', (req, res) => {
    res.render('index', {msg: 'Welcome to the note app (server side rendering)!'})
});

app.listen(app.get('port'), () => {
    console.log(`Express.js server is listening on port ${app.get('port')}`)
});
