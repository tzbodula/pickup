const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

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

const sslServer = https.createServer(
    {
        cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem')),
        key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem'))
    },
    app
)

sslServer.listen(PORT, () => console.log("app started"));