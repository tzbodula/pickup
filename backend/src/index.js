const express = require('express');
const usersRoute = require('./routes/users');
const eventsRoute = require('./routes/events');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

// Any requests made to localhost:3000/users will be delegated to the users.js code.
// Any requests made to localhost:3000/events will be delegated to the users.js code.
app.use('/users', usersRoute);
app.use('/events', eventsRoute);

app.listen(PORT, () => console.log("app started"));