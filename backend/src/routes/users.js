const { Router } = require('express');
const db = require('../config/DatabaseConfig')

const router = Router();

router.get('/', async (request, response) => {
    let users = await db.query('SELECT * FROM accounts');
    response.send(users[0]);
})

module.exports = router;