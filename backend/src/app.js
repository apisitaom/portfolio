const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const albumRoute = require('./routes/album');
const languageRoute = require('./routes/language');
const loginRoute = require('./routes/login');
const ownerRoute = require('./routes/owner');
const resultRoute = require('./routes/result');
const skillRoute = require('./routes/skill');
const aboutmeRoute = require('./routes/aboutme');
const resumeRoute = require('./routes/resume');
const commentRoute = require('./routes/comment');

const app = express();
const port = process.env.PORT || 4001

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use('/aboutme', aboutmeRoute);
app.use('/album', albumRoute);
app.use('/language', languageRoute);
app.use('/login', loginRoute);
app.use('/owner', ownerRoute);
app.use('/result', resultRoute);
app.use('/resume', resumeRoute);
app.use('/skill', skillRoute);
app.use('/comment', commentRoute);

app.use((req, res, next) => {
    console.log(`server on path ${req.ip} ${req.method} ${req.path}`);
    next();
});

app.use('/images', express.static(path.join(__dirname + '/../public/images')));

app.get(`/`, (req, res) => {
    res.json({ info : `Web site portfolio get start on port: ${port}`});
});

app.listen(port, () => {
    console.log(`server run on port ${port}`);
})