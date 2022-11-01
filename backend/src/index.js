require('dotenv').config();

const express = require('express');
const cors = require('cors');
const session = require('express-session');

const usersRoute = require('./routes/users');
const eventsRoute = require('./routes/events');
const currentUserRoute = require('./routes/user');
const sportsRoute = require('./routes/sports')
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false
}));


// Any requests made to localhost:3000/users will be delegated to the users.js code.
// Any requests made to localhost:3000/events will be delegated to the users.js code.
app.use('/users', usersRoute);
app.use('/events', eventsRoute);
app.use('/user', currentUserRoute);
app.use('/sports', sportsRoute);
app.listen(PORT, () => console.log("app started"));