const express = require('express');
const usersRoute = require('./routes/users');
const eventsRoute = require('./routes/events');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.use('/users', usersRoute);
app.use('/events', eventsRoute);

app.listen(PORT, () => console.log("app started"));