const express = require('express');
const cors = require('cors');

const usersRoute = require('./routes/users');
const eventsRoute = require('./routes/events');
const currentUserRoute = require('./routes/user');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

// Any requests made to localhost:3000/users will be delegated to the users.js code.
// Any requests made to localhost:3000/events will be delegated to the users.js code.
app.use('/users', usersRoute);
app.use('/events', eventsRoute);
app.use('/user', currentUserRoute);
app.listen(PORT, () => console.log("app started"));