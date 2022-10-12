const { Router } = require('express');

const router = Router();

router.get('/', (request, response) => {
    response.send("Welcome to the Users route");
})

module.exports = router;