const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const app = express();
app.set('view engine','ejs')
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to UserProfile application."});
});

require('./app/routes/userprofile.route.js')(app);

let port = 3500;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});