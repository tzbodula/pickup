const { Router } = require('express');

const router = Router();

router.get('/', (request, response) => {
    response.send("Welcome to the Events route");
})

module.exports = router;