const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, () => console.log("app started"));

app.get('/pickle', (request, response) => {
    response.send("pickle");
})

app.get('/', (request, response) => {
    response.send("home");
})