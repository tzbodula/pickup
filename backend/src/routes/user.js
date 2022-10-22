/**
 * Use this file when we want to perform data related to the CURRENT user that is logged in.
 */
const { Router } = require('express');
const db = require('../config/databaseConfig')

const router = Router();

//TODO. using user sessions, obtain my information
router.get('/', (req, res) => {
    return res.status(200).send('This is me. I am logged in');
});

module.exports = router;